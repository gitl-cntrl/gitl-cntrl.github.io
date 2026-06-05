module.exports = [
"[project]/Documents/GitHub/gitl-cntrl.github.io/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/ascii-art.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsciiArt",
    ()=>AsciiArt,
    "AsciiArtStatic",
    ()=>AsciiArtStatic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'motion/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
const ASCII_CHARSETS = {
    standard: " .,:;i1tfLCG08@",
    blocks: " ░▒▓█",
    binary: " 01",
    dots: " ·•●",
    minimal: " .:░▒",
    dense: " .'`^\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
    arrows: " ←↑→↓↔↕↖↗↘↙",
    stars: " ·✦✧★",
    hash: " -=#",
    pipes: " |/─\\│",
    braille: " ⠁⠃⠇⠏⠟⠿⡿⣿",
    circles: " ○◔◑◕●",
    squares: " ▢▣▤▥▦▧▨▩",
    hearts: " ♡♥",
    math: " +-×÷=≠≈∞"
};
const isCharsetPreset = (value)=>{
    return value in ASCII_CHARSETS;
};
const resolveCharset = (charset)=>{
    if (isCharsetPreset(charset)) {
        return ASCII_CHARSETS[charset];
    }
    return charset;
};
const resolveCssColor = (color, element)=>{
    if (!color) return color;
    if (color.startsWith("var(")) {
        if (!element) return "#ffffff";
        const tempDiv = document.createElement("div");
        tempDiv.style.color = color;
        element.appendChild(tempDiv);
        const computedColor = getComputedStyle(tempDiv).color;
        element.removeChild(tempDiv);
        return computedColor || "#ffffff";
    }
    return color;
};
const MATRIX_CHARSET = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
const AsciiArt = ({ src, resolution = 80, charset = "standard", color = "#ffffff", backgroundColor = "transparent", inverted = false, colored = false, animated = true, animationStyle = "fade", animationDuration = 1, fontFamily = "monospace", className, animateOnView = true, objectFit = "cover" })=>{
    const uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [asciiData, setAsciiData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = useInView(containerRef, {
        once: true,
        amount: 0.1
    });
    const shouldStartAnimation = animated && animateOnView ? isInView : animated;
    const shouldShowStatic = !animated || animationStyle === "none";
    const resolvedCharset = resolveCharset(charset);
    const effectiveCharset = inverted ? resolvedCharset.split("").reverse().join("") : resolvedCharset;
    const defaultColor = inverted ? "#ffffff" : "#000000";
    const textColor = color || defaultColor;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isCancelled = false;
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = ()=>{
            if (isCancelled) return;
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                setError("Canvas context not available");
                return;
            }
            const imgWidth = img.naturalWidth;
            const imgHeight = img.naturalHeight;
            const imgAspect = imgWidth / imgHeight;
            const charAspectRatio = 0.55;
            const cols = resolution;
            const rows = Math.floor(cols * charAspectRatio);
            canvas.width = cols;
            canvas.height = rows;
            const visualAspect = 1.0;
            let sx = 0, sy = 0, sw = imgWidth, sh = imgHeight;
            if (objectFit === "cover") {
                if (imgAspect > visualAspect) {
                    sw = imgHeight * visualAspect;
                    sx = (imgWidth - sw) / 2;
                } else {
                    sh = imgWidth / visualAspect;
                    sy = (imgHeight - sh) / 2;
                }
            } else if (objectFit === "contain") {
                ctx.fillStyle = "#000000";
                ctx.fillRect(0, 0, cols, rows);
                let dw, dh, dx, dy;
                if (imgAspect > visualAspect) {
                    dw = cols;
                    dh = cols / imgAspect * charAspectRatio;
                    dx = 0;
                    dy = (rows - dh) / 2;
                } else {
                    dh = rows;
                    dw = rows * imgAspect / charAspectRatio;
                    dx = (cols - dw) / 2;
                    dy = 0;
                }
                ctx.drawImage(img, dx, dy, dw, dh);
            }
            if (objectFit !== "contain") {
                ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
            }
            let imageData;
            try {
                imageData = ctx.getImageData(0, 0, cols, rows);
            } catch  {
                setError("Unable to read image data (CORS issue)");
                return;
            }
            const data = imageData.data;
            const result = [];
            for(let y = 0; y < rows; y++){
                const row = [];
                for(let x = 0; x < cols; x++){
                    const idx = (y * cols + x) * 4;
                    const r = data[idx];
                    const g = data[idx + 1];
                    const b = data[idx + 2];
                    const a = data[idx + 3];
                    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                    const adjustedBrightness = a === 0 ? 0 : brightness;
                    const charIndex = Math.floor(adjustedBrightness * (effectiveCharset.length - 1));
                    const char = effectiveCharset[charIndex] || " ";
                    row.push({
                        char,
                        r,
                        g,
                        b
                    });
                }
                result.push(row);
            }
            setAsciiData(result);
            setIsLoaded(true);
        };
        img.onerror = ()=>{
            if (isCancelled) return;
            setError("Failed to load image");
        };
        return ()=>{
            isCancelled = true;
        };
    }, [
        src,
        resolution,
        effectiveCharset,
        objectFit
    ]);
    const drawCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((progress = 1, matrixProgress)=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container || asciiData.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const dpr = window.devicePixelRatio || 1;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        if (containerWidth === 0 || containerHeight === 0) return;
        canvas.width = containerWidth * dpr;
        canvas.height = containerHeight * dpr;
        canvas.style.width = `${containerWidth}px`;
        canvas.style.height = `${containerHeight}px`;
        ctx.scale(dpr, dpr);
        const resolvedBgColor = resolveCssColor(backgroundColor, container);
        const resolvedTextColor = resolveCssColor(textColor, container);
        if (resolvedBgColor !== "transparent") {
            ctx.fillStyle = resolvedBgColor;
            ctx.fillRect(0, 0, containerWidth, containerHeight);
        } else {
            ctx.clearRect(0, 0, containerWidth, containerHeight);
        }
        const rows = asciiData.length;
        const cols = asciiData[0]?.length || 0;
        if (cols === 0) return;
        const charWidth = containerWidth / cols;
        const charHeight = containerHeight / rows;
        const fontSize = Math.min(charWidth * 1.8, charHeight * 1.2);
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
        const totalChars = rows * cols;
        const revealedChars = Math.floor(progress * totalChars);
        let charIndex = 0;
        for(let y = 0; y < rows; y++){
            for(let x = 0; x < cols; x++){
                const pixel = asciiData[y][x];
                const cx = x * charWidth + charWidth / 2;
                const cy = y * charHeight;
                if (animationStyle === "typewriter" && charIndex >= revealedChars) {
                    charIndex++;
                    continue;
                }
                let displayChar = pixel.char;
                let displayColor = colored ? `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})` : resolvedTextColor;
                if (animationStyle === "matrix" && matrixProgress !== undefined) {
                    const charProgress = (x * 0.02 + y * 0.01) / 2;
                    if (matrixProgress < charProgress) {
                        charIndex++;
                        continue;
                    } else if (matrixProgress < charProgress + 0.15) {
                        displayChar = MATRIX_CHARSET[Math.floor(Math.random() * MATRIX_CHARSET.length)];
                        displayColor = "#00ff00";
                        ctx.shadowColor = "#00ff00";
                        ctx.shadowBlur = 5;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                }
                ctx.fillStyle = displayColor;
                ctx.globalAlpha = animationStyle === "fade" ? progress : 1;
                ctx.fillText(displayChar, cx, cy);
                charIndex++;
            }
        }
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
    }, [
        asciiData,
        backgroundColor,
        colored,
        textColor,
        fontFamily,
        animationStyle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoaded || asciiData.length === 0) return;
        const draw = ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) {
                requestAnimationFrame(draw);
                return;
            }
            if (shouldShowStatic || hasAnimated || !shouldStartAnimation) {
                drawCanvas(1);
                return;
            }
            const startTime = performance.now();
            const duration = animationStyle === "fade" ? animationDuration * 1000 : animationStyle === "typewriter" ? asciiData.length * asciiData[0]?.length * 2 : animationStyle === "matrix" ? 3000 : 1000;
            const animate = (currentTime)=>{
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                if (animationStyle === "matrix") {
                    drawCanvas(1, progress);
                } else {
                    drawCanvas(progress);
                }
                if (progress < 1) {
                    animationRef.current = requestAnimationFrame(animate);
                } else {
                    setHasAnimated(true);
                }
            };
            animationRef.current = requestAnimationFrame(animate);
        };
        const frameId = requestAnimationFrame(draw);
        return ()=>{
            cancelAnimationFrame(frameId);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [
        isLoaded,
        shouldStartAnimation,
        shouldShowStatic,
        hasAnimated,
        animationStyle,
        animationDuration,
        drawCanvas,
        asciiData
    ]);
    useIsomorphicLayoutEffect(()=>{
        if (!isLoaded || asciiData.length === 0) return;
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;
        drawCanvas(1);
    }, [
        isLoaded,
        asciiData,
        drawCanvas
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoaded || asciiData.length === 0) return;
        const container = containerRef.current;
        if (!container) return;
        const resizeObserver = new ResizeObserver(()=>{
            drawCanvas(1);
        });
        resizeObserver.observe(container);
        return ()=>resizeObserver.disconnect();
    }, [
        isLoaded,
        asciiData,
        drawCanvas
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-red-500 text-sm font-mono", className),
            children: [
                "Error: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/ascii-art.tsx",
            lineNumber: 449,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-neutral-500 text-sm font-mono animate-pulse", className),
            style: {
                backgroundColor
            },
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/ascii-art.tsx",
            lineNumber: 462,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const canvasElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        id: `ascii-canvas-${uniqueId}`,
        ref: canvasRef,
        className: "block w-full h-full",
        "aria-label": "ASCII art rendering of image",
        role: "img"
    }, uniqueId, false, {
        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/ascii-art.tsx",
        lineNumber: 475,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    if (animationStyle === "fade" && animated && !hasAnimated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            ref: containerRef,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden", className),
            style: {
                backgroundColor
            },
            initial: {
                opacity: 0
            },
            animate: shouldStartAnimation ? {
                opacity: 1
            } : {
                opacity: 0
            },
            transition: {
                duration: animationDuration * 0.3
            },
            children: canvasElement
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/ascii-art.tsx",
            lineNumber: 487,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden", className),
        style: {
            backgroundColor
        },
        children: canvasElement
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/ascii-art.tsx",
        lineNumber: 501,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const AsciiArtStatic = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AsciiArt, {
        ...props,
        animated: false,
        animationStyle: "none"
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/ascii-art.tsx",
        lineNumber: 514,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lens",
    ()=>Lens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'motion/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
const Lens = ({ children, zoomFactor = 1.5, lensSize = 170, isStatic = false, position = {
    x: 200,
    y: 150
}, hovering, setHovering })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [localIsHovering, setLocalIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHovering = hovering !== undefined ? hovering : localIsHovering;
    const setIsHovering = setHovering || setLocalIsHovering;
    // const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 100,
        y: 100
    });
    const handleMouseMove = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({
            x,
            y
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative overflow-hidden rounded-lg z-20",
        onMouseEnter: ()=>{
            setIsHovering(true);
        },
        onMouseLeave: ()=>setIsHovering(false),
        onMouseMove: handleMouseMove,
        children: [
            children,
            isStatic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        scale: 0.58
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    },
                    className: "absolute inset-0 overflow-hidden",
                    style: {
                        maskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
                        transformOrigin: `${position.x}px ${position.y}px`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            transform: `scale(${zoomFactor})`,
                            transformOrigin: `${position.x}px ${position.y}px`
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                children: isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            scale: 0.58
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.8
                        },
                        transition: {
                            duration: 0.3,
                            ease: "easeOut"
                        },
                        className: "absolute inset-0 overflow-hidden",
                        style: {
                            maskImage: `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                            WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 100%)`,
                            transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                            zIndex: 50
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            style: {
                                transform: `scale(${zoomFactor})`,
                                transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`
                            },
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx",
                            lineNumber: 110,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx",
                        lineNumber: 91,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx",
                    lineNumber: 90,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaveShader",
    ()=>WaveShader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'motion/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const fragmentShader = `
  uniform float uTime;
  uniform float uWaveAmplitude;
  uniform float uWaveFrequency;
  uniform float uWaveSpeed;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Create wave distortion
    float wave1 = sin(uv.x * uWaveFrequency + uTime * uWaveSpeed) * uWaveAmplitude;
    float wave2 = sin(uv.y * uWaveFrequency * 0.7 + uTime * uWaveSpeed * 0.8) * uWaveAmplitude;
    float wave3 = cos((uv.x + uv.y) * uWaveFrequency * 0.5 + uTime * uWaveSpeed * 1.2) * uWaveAmplitude;
    
    float distortion = wave1 + wave2 + wave3;
    uv.y += distortion;
    
    // Create color layers
    float pattern1 = sin(uv.x * 3.0 + uTime * 0.5) * 0.5 + 0.5;
    float pattern2 = sin(uv.y * 4.0 + uTime * 0.3) * 0.5 + 0.5;
    float pattern3 = sin((uv.x + uv.y) * 2.0 + uTime * 0.7) * 0.5 + 0.5;
    
    // Mix colors based on patterns
    vec3 color = mix(uColor1, uColor2, pattern1);
    color = mix(color, uColor3, pattern2);
    
    // Add brightness variation
    float brightness = 0.5 + 0.5 * sin(uTime + (uv.x + uv.y) * 5.0);
    color *= brightness;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;
const WaveShader = ({ width = 800, height = 600, className = "" })=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const programRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [waveAmplitude, setWaveAmplitude] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.1);
    const [waveFrequency, setWaveFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5);
    const [waveSpeed, setWaveSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [color1, setColor1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#ff006e");
    const [color2, setColor2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#00f5ff");
    const [color3, setColor3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#8338ec");
    const hexToVec3 = (hex)=>{
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result) {
            return [
                parseInt(result[1], 16) / 255,
                parseInt(result[2], 16) / 255,
                parseInt(result[3], 16) / 255
            ];
        }
        return [
            1,
            1,
            1
        ];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const gl = canvas.getContext("webgl2");
        if (!gl) {
            console.error("WebGL2 not supported");
            return;
        }
        // Set canvas size
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        // Compile shader
        const compileShader = (source, type)=>{
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader));
            }
            return shader;
        };
        const vertShader = compileShader(vertexShader, gl.VERTEX_SHADER);
        const fragShader = compileShader(fragmentShader, gl.FRAGMENT_SHADER);
        // Create program
        const program = gl.createProgram();
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program));
        }
        programRef.current = program;
        gl.useProgram(program);
        // Create quad geometry
        const positions = new Float32Array([
            -1,
            -1,
            0,
            1,
            -1,
            0,
            -1,
            1,
            0,
            1,
            1,
            0
        ]);
        const uv = new Float32Array([
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            1
        ]);
        const indices = new Uint16Array([
            0,
            1,
            2,
            1,
            3,
            2
        ]);
        // Position buffer
        const posBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
        const posAttrib = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(posAttrib);
        gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);
        // UV buffer
        const uvBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, uv, gl.STATIC_DRAW);
        const uvAttrib = gl.getAttribLocation(program, "uv");
        gl.enableVertexAttribArray(uvAttrib);
        gl.vertexAttribPointer(uvAttrib, 2, gl.FLOAT, false, 0, 0);
        // Index buffer
        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
        // Get uniform locations
        const timeUniform = gl.getUniformLocation(program, "uTime");
        const amplitudeUniform = gl.getUniformLocation(program, "uWaveAmplitude");
        const frequencyUniform = gl.getUniformLocation(program, "uWaveFrequency");
        const speedUniform = gl.getUniformLocation(program, "uWaveSpeed");
        const color1Uniform = gl.getUniformLocation(program, "uColor1");
        const color2Uniform = gl.getUniformLocation(program, "uColor2");
        const color3Uniform = gl.getUniformLocation(program, "uColor3");
        let startTime = Date.now();
        const render = ()=>{
            const elapsed = (Date.now() - startTime) / 1000;
            gl.uniform1f(timeUniform, elapsed);
            gl.uniform1f(amplitudeUniform, waveAmplitude);
            gl.uniform1f(frequencyUniform, waveFrequency);
            gl.uniform1f(speedUniform, waveSpeed);
            const [r1, g1, b1] = hexToVec3(color1);
            const [r2, g2, b2] = hexToVec3(color2);
            const [r3, g3, b3] = hexToVec3(color3);
            gl.uniform3f(color1Uniform, r1, g1, b1);
            gl.uniform3f(color2Uniform, r2, g2, b2);
            gl.uniform3f(color3Uniform, r3, g3, b3);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
            animationRef.current = requestAnimationFrame(render);
        };
        render();
        return ()=>{
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [
        width,
        height,
        waveAmplitude,
        waveFrequency,
        waveSpeed,
        color1,
        color2,
        color3
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col gap-6 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden backdrop-blur",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8
                },
                viewport: {
                    once: true
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "w-full block",
                    style: {
                        aspectRatio: `${width}/${height}`
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur space-y-6",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    delay: 0.2
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-cyan-400",
                        children: "Wave Controls"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-300 mb-2",
                                children: [
                                    "Wave Amplitude: ",
                                    waveAmplitude.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "0.5",
                                step: "0.01",
                                value: waveAmplitude,
                                onChange: (e)=>setWaveAmplitude(parseFloat(e.target.value)),
                                className: "w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-300 mb-2",
                                children: [
                                    "Wave Frequency: ",
                                    waveFrequency.toFixed(1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "1",
                                max: "20",
                                step: "0.5",
                                value: waveFrequency,
                                onChange: (e)=>setWaveFrequency(parseFloat(e.target.value)),
                                className: "w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-slate-300 mb-2",
                                children: [
                                    "Wave Speed: ",
                                    waveSpeed.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "5",
                                step: "0.1",
                                value: waveSpeed,
                                onChange: (e)=>setWaveSpeed(parseFloat(e.target.value)),
                                className: "w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-300 mb-2",
                                        children: "Color 1"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: color1,
                                                onChange: (e)=>setColor1(e.target.value),
                                                className: "w-12 h-10 rounded cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-400",
                                                children: color1
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-300 mb-2",
                                        children: "Color 2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: color2,
                                                onChange: (e)=>setColor2(e.target.value),
                                                className: "w-12 h-10 rounded cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-400",
                                                children: color2
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-300 mb-2",
                                        children: "Color 3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: color3,
                                                onChange: (e)=>setColor3(e.target.value),
                                                className: "w-12 h-10 rounded cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-400",
                                                children: color3
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$components$2f$ascii$2d$art$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/ascii-art.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$components$2f$lens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/lens.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$components$2f$wave$2d$shader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/src/components/wave-shader.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'motion/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/gitl-cntrl.github.io/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const DEMO_IMAGE = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80";
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-black via-slate-900 to-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "flex flex-col items-center justify-center pt-20 pb-10 px-4",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-7xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600",
                        children: "Aceternity Playground"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-slate-400 text-center max-w-2xl",
                        children: "Explore cutting-edge UI components and interactive demos"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-12 text-center text-cyan-400",
                        children: "Featured Components"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                className: "bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all group",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-video bg-black flex items-center justify-center overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$components$2f$ascii$2d$art$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AsciiArt"], {
                                            src: DEMO_IMAGE,
                                            resolution: 40,
                                            charset: "standard",
                                            color: "#00ff00",
                                            animated: true,
                                            animationStyle: "fade",
                                            animationDuration: 1,
                                            className: "w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-cyan-400 mb-2",
                                                children: "ASCII Art"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 mb-4",
                                                children: "Transform images into stunning ASCII art with multiple animation styles"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/demos/ascii-art",
                                                className: "inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors",
                                                children: "View Demo →"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                className: "bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all group",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.1
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-video bg-black flex items-center justify-center overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$components$2f$lens$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lens"], {
                                            zoomFactor: 2,
                                            lensSize: 200,
                                            isStatic: true,
                                            position: {
                                                x: 200,
                                                y: 150
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: DEMO_IMAGE,
                                                alt: "Lens demo",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-cyan-400 mb-2",
                                                children: "Lens Effect"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 mb-4",
                                                children: "Interactive hover zoom with circular magnification lens"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/demos/lens",
                                                className: "inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors",
                                                children: "View Demo →"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                className: "bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all group",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-video bg-black",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$src$2f$components$2f$wave$2d$shader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaveShader"], {
                                            width: 400,
                                            height: 300,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-cyan-400 mb-2",
                                                children: "Wave Shader"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 mb-4",
                                                children: "GLSL-powered wave animations with real-time controls"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/demos/wave-shader",
                                                className: "inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors",
                                                children: "View Demo →"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                className: "bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all group",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.3
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-video bg-black flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-2",
                                                    children: "🤖"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400",
                                                    children: "TensorFlow ML"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-cyan-400 mb-2",
                                                children: "Image Classifier"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 mb-4",
                                                children: "Real-time image classification using TensorFlow MobileNet"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/demos/image-classifier",
                                                className: "inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors",
                                                children: "View Demo →"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "max-w-4xl mx-auto px-4 py-20 border-t border-slate-700",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-12 text-center text-cyan-400",
                        children: "Why Choose These Components?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/30 border border-slate-700 rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2 text-blue-400",
                                        children: "⚡ High Performance"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300",
                                        children: "Optimized rendering with WebGL shaders and efficient algorithms"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/30 border border-slate-700 rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2 text-blue-400",
                                        children: "🎨 Beautiful UI"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300",
                                        children: "Crafted with Tailwind CSS and Framer Motion for smooth animations"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/30 border border-slate-700 rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2 text-blue-400",
                                        children: "🔧 Customizable"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300",
                                        children: "Full control over colors, sizes, speeds, and all visual parameters"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/30 border border-slate-700 rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2 text-blue-400",
                                        children: "📱 Responsive"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300",
                                        children: "Works seamlessly across all devices and screen sizes"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/30 border border-slate-700 rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2 text-blue-400",
                                        children: "🚀 Easy Integration"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300",
                                        children: "Simple React components that work with any Next.js project"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/30 border border-slate-700 rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-2 text-blue-400",
                                        children: "🤖 AI-Powered"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300",
                                        children: "Leverage TensorFlow for advanced machine learning capabilities"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-700 mt-20 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 text-center text-slate-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$gitl$2d$cntrl$2e$github$2e$io$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Built with Next.js, Tailwind CSS, TensorFlow.js, and WebGL"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/gitl-cntrl.github.io/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_GitHub_gitl-cntrl_github_io_src_10a6qqv._.js.map