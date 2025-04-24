import React from 'react';
import ReactDOM from 'react-dom/client';

import { version as lodashVersionFromPackageOne } from 'one';
import { version as lodashVersionFromPackageTwo } from 'two';

import pkgJsonOne from 'one/package.json';
import pkgJsonTwo from 'two/package.json';

const check = (version1: string, version2: string) => {
  return version1.replace(/[^0-9.]/g, "") === version2.replace(/[^0-9.]/g, '') ? "✅" : "❌";
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Vite monorepo</h1>
    This monorepo has two packages, "one" and "two" each with a dependency on different lodash versions.
    
    <h3>package "one" {check(pkgJsonOne.dependencies.lodash, lodashVersionFromPackageOne)}</h3>
    Expected lodash version: <pre>{pkgJsonOne.dependencies.lodash}</pre>
    <br/>
    Actual lodash version: <pre>{lodashVersionFromPackageOne}</pre>
    
    <hr/>
    

    <h3>package "two" {check(pkgJsonTwo.dependencies.lodash, lodashVersionFromPackageTwo)}</h3>
    Expected lodash version: <pre>{pkgJsonTwo.dependencies.lodash}</pre>
    <br/>
    Actual lodash version: <pre>{lodashVersionFromPackageTwo}</pre>
      </React.StrictMode>
);
