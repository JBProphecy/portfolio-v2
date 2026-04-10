## **Configuration**

---

In `tsconfig.json`, you need to add the following code.

This will configure the alias `@`.

The file already has a json object, so just copy and paste what's inside the following json object.

``` json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  },
}
```

---

In both `tsconfig.app.json` and `tsconfig.node.json`, you need to add the following code.

Without this, the alias `@` will not work.

Each file already has a json object, so just copy and paste what's inside the following object.

``` json
{
  "extends": "./tsconfig.json",
}
```

---
