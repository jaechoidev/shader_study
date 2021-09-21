#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(1.0, 1.0, 1.0);

    float size = 20.0;
    color.r = sin(floor(coord.y*1000.0)+u_time * 1.0)+1.0 / 2.0;
    color.g = sin(floor(coord.y*900.0)+u_time * 1.0)+1.0 / 2.0;
    color.b = sin(floor(coord.y*800.0)+u_time * 1.0)+1.0 / 2.0;
    color *= vec3(sin(floor(coord.y*100.0)+u_time * 1.0)+1.0 / 2.0);
    color *= vec3((cos(coord.x*1.0)+u_time)+1.0 /2.0) 
    + vec3((cos(coord.x*10.0)+u_time)+1.0 /2.0)
    + vec3((cos(coord.x*sin(u_time))+u_time)+1.0 /2.0);
    
    float alpha = sin(floor(coord.y*1000.0)+u_time * 1.0)+1.0 / 2.0;

    gl_FragColor = vec4(color, alpha);
}