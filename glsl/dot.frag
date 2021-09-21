#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float r_color = 0.0;
    float g_color = 0.0;
    float b_color = 0.0;

    float scale = 3.0;

    float w_resolution = u_resolution.x / scale;
    float h_resolution = u_resolution.y / scale;
    
    float r_offset = 0.0;
    float g_offset = 0.1 * scale;
    float b_offset = 0.2 * scale;

    r_color += sin((coord.x+r_offset)* w_resolution) * sin((coord.x+r_offset)* w_resolution)/2.0;
    r_color += sin((coord.y+r_offset)* h_resolution) * sin((coord.y+r_offset)* h_resolution)/2.0;
    g_color += sin((coord.x+g_offset)* w_resolution) * sin((coord.x+g_offset)* w_resolution)/2.0;
    g_color += sin((coord.y+g_offset)* h_resolution) * sin((coord.y+g_offset)* h_resolution)/2.0;
    b_color += sin((coord.x+b_offset)* w_resolution) * sin((coord.x+b_offset)* w_resolution)/2.0;
    b_color += sin((coord.y+b_offset)* h_resolution) * sin((coord.y+b_offset)* h_resolution)/2.0;

    gl_FragColor = vec4(vec3(r_color,g_color,b_color), 1.0);
}
