#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535;

uniform vec2 u_resolution;
uniform float u_time;

float polygonShape(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x,position.y)+10.0*sin(u_time);
    float slice = PI * 2.0 / sides;

    return 1.0-step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.1,0.7,0.3);
    float sides = 7.0;
    float radius = 0.3 + sin(u_time);
    float polygon = polygonShape(position, radius, sides);

    color = color * vec3(polygon);

    gl_FragColor = vec4 (color, 1.0);
}