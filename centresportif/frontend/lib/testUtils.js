import casual from 'casual'

casual.seed(777);

const fakeSchedule = () =>  ({
    id: 'ckju9xn14002c0756p6rd7yb2',
    lundi : '8 à 22h',
    mardi : '8 à 22h',
    mercredi : '8 à 22h',
    jeudi : '8 à 22h',
    vendredi : '8 à 22h',
    samedi : '8 à 22h',
    dimanche: '8 à 22h',
    vacances: '8 à 20h',
});

export {fakeSchedule}