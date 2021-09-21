#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(-0.5,-0.5);
    coord += translate;
    const int lights = 30;
    float rot_speed = (u_time);
    for(int i = 0; i < lights; i++){
        float radius = 0.3;
        float rad = radians(360.0/float(lights)) * float(i);
        color += (0.03*0.1*float(i+1)*(1.0/float(i+5))) / length(coord + (sin(u_time)*1.0+1.0)*vec2(radius * cos(rad+rot_speed), radius * sin(rad+rot_speed)));

    }


    gl_FragColor = vec4(color.r * abs(2.0*cos(u_time)) , color.g * abs(cos(u_time))+0.1, color.b * abs(sin(u_time))+0.2, 1.0);

}