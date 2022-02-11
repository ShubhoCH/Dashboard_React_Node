import express, {Application, Request, Response, NextFunction} from 'express'

const app: Application = express();

const data = [
    {
        name: 'Damon Salvatore',
        age:  '20',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'false',
        message: "Hello Brother!",
        lang: "Eng"
    },
    {
        name: 'Elena Gilbert',
        age:  '30',
        town: 'Dhanbad',
        state: 'Jharkhand',
        mobile: '9876543210',
        service: 'false',
    },
    {
        name: 'Stefan Salvatore',
        age:  '22',
        town: 'Dhanbad',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'false',
        message: "dfsf",
        lang: "Eng"
    },
    {
        name: 'Bonnie Forbes forbesforbes forbesforbesforbesforbesforbes',
        age:  '21',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '7894561234',
        service: 'false',
    },
    {
        name: 'Caroline Shan',
        age:  '26',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '7418529356',
        service: 'false',
    },
    {
        name: 'Matty',
        age:  '18',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '9517538526',
        service: 'false',
    },
    {
        name: 'John Gilber',
        age:  '24',
        town: 'London',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'true',
    },
    {
        name: 'Damon Salvatore',
        age:  '20',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'false',
        message: "Hello Brother!",
        lang: "Eng"
    },
    {
        name: 'Elena Gilbert',
        age:  '30',
        town: 'Dhanbad',
        state: 'Jharkhand',
        mobile: '9876543210',
        service: 'false',
    },
    {
        name: 'Stefan Salvatore',
        age:  '22',
        town: 'Dhanbad',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'false',
        message: "dfsf",
        lang: "Eng"
    },
    {
        name: 'Bonnie Forbes forbesforbes forbesforbesforbesforbesforbes',
        age:  '21',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '7894561234',
        service: 'false',
    },
    {
        name: 'Caroline Shan',
        age:  '26',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '7418529356',
        service: 'false',
    },
    {
        name: 'Matty',
        age:  '18',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '9517538526',
        service: 'false',
    },
    {
        name: 'John Gilber',
        age:  '24',
        town: 'London',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'true',
    },
    {
        name: 'Damon Salvatore',
        age:  '20',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'false',
        message: "Hello Brother!",
        lang: "Eng"
    },
    {
        name: 'Elena Gilbert',
        age:  '30',
        town: 'Dhanbad',
        state: 'Jharkhand',
        mobile: '9876543210',
        service: 'false',
    },
    {
        name: 'Stefan Salvatore',
        age:  '22',
        town: 'Dhanbad',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'false',
        message: "dfsf",
        lang: "Eng"
    },
    {
        name: 'Bonnie Forbes forbesforbes forbesforbesforbesforbesforbes',
        age:  '21',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '7894561234',
        service: 'false',
    },
    {
        name: 'Caroline Shan',
        age:  '26',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '7418529356',
        service: 'false',
    },
    {
        name: 'Matty',
        age:  '18',
        town: 'Mystic Fall',
        state: 'Jharkhand',
        mobile: '9517538526',
        service: 'false',
    },
    {
        name: 'John Gilber',
        age:  '24',
        town: 'London',
        state: 'Jharkhand',
        mobile: '8757014613',
        service: 'true',
    },
];

app.get('/getData/', (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data)
});


app.listen(5000, () => console.log('Server running'));
