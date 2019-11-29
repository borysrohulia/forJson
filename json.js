const ochko = [
    {
        name: 'Misha',
        sureName: 'Hurin'
    },
    {
        name: 'Borys',
        sureName: 'Rohulia'
    }
];

const jsonChik = JSON.stringify(ochko);

const pre = document.createElement('pre');
pre.innerHTML = jsonChik;