#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float angle = atan(-coord.y + 25.0, coord.x - 0.5) * 0.1;
    float len = length(coord-vec2(0.5,0.25));

    color.r += sin(len * 5.0 + angle * 40.0 + u_time*10.0);
    color.g += cos(len * 4.0 + angle * 30.0 + u_time*10.0);
    color.b += sin(len * 3.0 + angle * 20.0 + u_time*10.0);
    

    gl_FragColor = vec4(color, 1.0);

}