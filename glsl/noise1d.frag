#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


float noise1d(float value){
    return cos(value + cos(value*90.0) * 100.0) * 0.5 + 0.5;
}

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    float alpha = 1.0;

    color.r += noise1d(u_time/coord.y);
    color.g += noise1d(u_time/coord.x);
    color.b += noise1d(u_time/coord.y*10.0);

    gl_FragColor = vec4(color, alpha);
}