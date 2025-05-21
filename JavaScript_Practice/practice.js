/* HOW TO get current year
const currentYear = new Date().getFullYear();
console.log(currentYear);
*/

const fodderCount = (rank, numToPromote) => {
    let rare = 3;
    let rarePlus = 1;
    let elite = 1;
    let elitePlus = 1;
    let execp = 1;
    let excepPlus = 1;
    let epic = 1;
    let epicPlus = 1;
    let leg = 1;
    let legPlus = 1;
    let sei = 1;
    let seiPlus = 1;
    let omni = 1;
    let omniPus = 1;

    if (rank !== 'rare+' && rank !== 'exceptional' && rank !== 'exceptional+'){
        return 'Please enter a valid rank from the following:\n' +
                'rare+\n' + 
                'elite\n' +
                'elite+\n' +
                'exceptional\n' + 
                'exceptional+\n' +
                'epic\n' +
                'epic+\n' +
                'legendary\n' +
                'legendary+\n' +
                'seismic\n' +
                'seismic+\n' +
                'omnipotent\n' +
                'omnipotent+\n';
    } else if(numToPromote < 1){
        return `please select a number (1 or higher).`;
 
    } else if (rank === 'rare+') {
        rare = 3 * numToPromote;
        return `For ${numToPromote} ${rank}, you need ${rare} rare's`;
    } else if (rank === 'exceptional') {
        rarePlus = numToPromote * 3;
        rare = rarePlus * 3;
        return `For ${numToPromote} ${rank}, you need ${rare} rare's`;
    } else if (rank === 'exceptional+'){
        exceptional = numToPromote * 2;
        rarePlus = exceptional * 3;
        rare = rarePlus * 3;
        return `For ${numToPromote} ${rank}, you need ${rare} rare's`;
    }
}

console.log(fodderCount('rare+', 4));
console.log(fodderCount('exceptional', 1));
console.log(fodderCount('exceptional+', 1));