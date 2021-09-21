#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    float alpha = 1.0;
    vec2 translate = vec2(-0.5);
    coord += translate;

    color.r += abs(0.1 + length(coord) - 0.6 * abs(sin(u_time* 9.0 / 12.0)));
    color.g += abs(0.1 + length(coord) - 0.6 * abs(sin(u_time* 6.0 / 4.0)));
    color.b += abs(0.1 + length(coord) - 0.6 * abs(sin(u_time* 3.0 / 9.0)));

    gl_FragColor = vec4(0.1/color*0.1, alpha);
}