const ochko = [
    {
        name: 'Misha',
        sureName: 'Hurin'
    },
    {
        name: 'Borys',
        sureName: 'Rohulia'
    }
]

const body = document.querySelector('body');
const jsonChik = JSON.stringify(ochko);

const pre = document.createElement('pre');
document.body.append(pre);
pre.innerHTML = jsonChik;