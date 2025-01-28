import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@types": path.resolve(__dirname, "./src/types"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@atoms": path.resolve(__dirname, "./src/components/atoms"),
            "@molecules": path.resolve(__dirname, "./src/components/molecules"),
            "@organisms": path.resolve(__dirname, "./src/components/organisms"),
            "@templates": path.resolve(__dirname, "./src/components/templates"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@api": path.resolve(__dirname, "./src/api"),
        },
    },
});
