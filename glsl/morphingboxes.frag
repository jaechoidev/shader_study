#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy *  1.0 - u_resolution;
    vec3 color = vec3(0.0);
    float entity = 2.0;
    color += abs(cos(coord.x/entity) + sin(coord.y/entity) - cos(u_time));
    color.r *= coord.y;

    gl_FragColor = vec4(color.r, color.g, color.b, 1.0);   
}