/* eslint-disable eqeqeq */
/* eslint-disable no-empty */
/* eslint-disable no-param-reassign */
import fs from 'fs';
const cache = {};
function readSavedFiles(path) {
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch {
    return [];
  }
}
function saveInFile(path, data) {
  const dataString = JSON.stringify(data);
  fs.writeFileSync(path, dataString);
}
function pause(milliseconds) {
  const dt = new Date();
  while (new Date() - dt <= milliseconds) {}
}
const db = (file) => {
  const dbObj = {
    select() {
      return {
        // HAS RESULTS
        from(fromFile) {
          const path = `src/db/data/${fromFile}.json`;
          if (!cache[fromFile]) {
            cache[fromFile] = readSavedFiles(path);
          }
          const cacheFile = cache[fromFile];
          return {
            results: cacheFile,
            async insert(obj) {
              pause(10);
              if (Object.entries(obj).filter(([k]) => k !== 'id' && k !== 'created_at' && k !== 'updated_at').lenght) {
                throw new Error('Insert object does not contains required values');
              }
              if (!obj.id) {
                obj.id = new Date().getTime();
              } else if (cacheFile.map((cacheObj) => cacheObj.id).includes(obj.id)) {
                throw new Error('Id must be unique');
              }
              if (!obj.created_at) {
                obj.created_at = new Date().toISOString();
              }
              if (!obj.updated_at) {
                obj.updated_at = new Date().toISOString();
              }
              cacheFile.push(JSON.parse(JSON.stringify(obj)));
              saveInFile(path, cacheFile);
              return [obj.id];
            },
            // HAS ASYNC RESULTS
            async where(searchObjOrCollumn, value) {
              pause(10);
              let columns = [searchObjOrCollumn];
              let columnValues = [value];
              if (typeof searchObjOrCollumn === 'object' && !value) {
                columns = Object.keys(searchObjOrCollumn);
                columnValues = Object.values(searchObjOrCollumn);
              }
              const filterResults = cacheFile.filter((obj) => {
                const mapResults = columns.map(
                  (key, index) => obj[key] == columnValues[index],
                );
                return mapResults.reduce((prev, curr) => curr && prev);
              });
              return {
                results: filterResults,
                async update(updateObject) {
                  pause(10);
                  filterResults.forEach((obj) => {
                    const objIndexInCache = cacheFile.findIndex(
                      (cacheObj) => obj.id == cacheObj.id,
                    );
                    cacheFile[objIndexInCache] = {
                      ...cacheFile[objIndexInCache],
                      ...updateObject,
                    };
                    saveInFile(path, cacheFile);
                  });
                },
                async del() {
                  pause(10);
                  filterResults.forEach((obj) => {
                    const objIndexInCache = cacheFile.findIndex(
                      (cacheObj) => obj.id == cacheObj.id,
                    );
                    cacheFile.splice(objIndexInCache, 1);
                  });
                  saveInFile(path, cacheFile);
                },
              };
            },
          };
        },
      };
    },
  };
  if (file) {
    return dbObj.select().from(file);
  }
  return dbObj;
};
export default db;
