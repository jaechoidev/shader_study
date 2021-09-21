#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleShape(vec2 position, float radius){
    return step(radius, length((position) * u_resolution));
}

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);
    float radius = 0.1 * u_resolution.y ;

    float circle = circleShape(position-vec2(0.5,0.5), radius);

    color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}