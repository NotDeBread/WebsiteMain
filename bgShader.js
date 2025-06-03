let t = 0;
requestAnimationFrame(function update() {
    t += 1 / 120;
    requestAnimationFrame(update);
});
shaderWebBackground.shade({
    shaders: {
        image: {
            uniforms: {
                iResolution: (gl, loc, ctx) => gl.uniform2f(loc, ctx.width, ctx.height),
                iTime: (gl, loc, ctx) => gl.uniform1f(loc, t)
            }
        }
    }
});