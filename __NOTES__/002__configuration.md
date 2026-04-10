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

In `vite.config.ts`, you need to add the following code.

```
import path from "path"
```

The file already has the `defineConfig` declaration and some of the content, you just need to copy and paste the alias stuff.

```
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
```

---
