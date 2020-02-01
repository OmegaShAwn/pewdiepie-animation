var svg = SVG();
var draw, wave;

const init = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    svg.clear();
    svg.node.setAttribute("style","background: #fd0037")
    draw = svg.addTo('body').size(w, h);
    wc = w/250;
    let waves = '';
    for (let i = 0; i < wc-2; i++) waves = waves.concat(`t ${w/wc} ${h/wc} `);
    for (let i = -1.5*h; i < 1.5*h; i += 80) {
        draw.fill({ opacity: 0 })
            .stroke({ color: 'black', width: 5 })
            .path(`M -5 ${i} q ${w/10} ${-h}, ${w/wc} ${h/wc} ${waves} t ${(w/wc)+10} ${(h/wc)+10}`)
            .animate(8000)
            .ease(pos => -.5*(Math.cos(Math.PI*pos)-1))
            .plot(`M -5 ${i} q ${w/10} ${-h/2}, ${w/wc} ${h/wc} ${waves} t ${(w/wc)+10} ${(h/wc)+10}`)
            .loop(true, true);
        draw.fill({ opacity: 0 })
            .stroke({ color: 'black', width: 5 })
            .path(`M -5 ${i+5} q ${w/10} ${-h}, ${w/wc} ${h/wc} ${waves} t ${(w/wc)+10} ${(h/wc)+10}`)
            .animate(8000)
            .ease(pos => -.5*(Math.cos(Math.PI*pos)-1))
            .plot(`M -5 ${i+5} q ${w/10} ${-h/2}, ${w/wc} ${h/wc} ${waves} t ${(w/wc)+10} ${(h/wc)+10}`)
            .loop(true, true);
    }
};

init();
window.addEventListener('resize', init, false);