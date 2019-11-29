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
document.write(jsonChik)