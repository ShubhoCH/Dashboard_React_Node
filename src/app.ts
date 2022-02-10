import express, {Application, Request, Response, NextFunction} from 'express'

const app: Application = express();

const data = [
    {
        name: 'Dan',
        age:  '20',
        town: 'Dhanbad',
        state: 'Jharkhand',
        phno: '8757014613',
        serviceble: 'false',
        message: "dfsf",
        lang: "Eng"
    },
    {
        name: 'Tan',
        age:  '22'
    },
    {
        name: 'Pan',
        age:  '30'
    },
    {
        name: 'San',
        age:  '21'
    },
    {
        name: 'Ran',
        age:  '26'
    },
    {
        name: 'Tan',
        age:  '18'
    },
    {
        name: 'Dan',
        age:  '24'
    },
];

app.get('/getData/', (req: Request, res: Response) => {
    console.log("Here!");
    res.send(data)
});


app.listen(5000, () => console.log('Server running'));
