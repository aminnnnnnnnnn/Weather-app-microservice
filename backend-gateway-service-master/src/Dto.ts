export class WeatherDataEntry {
    name : string ;
    temp : number;
    main : string;
    description : string;
    wind_speed : number;
    constructor(name : string , temp : number , main :string , description :string   , wind_speed : number) {
        this.name = name;
        this.temp =temp;
        this.main = main ;
        this.description = description;
        this.wind_speed = wind_speed;
    }
}

const weatherDataStructure = {
    name: 'WeatherData',
    fields: [
        { name: 'id', type: 'Number' },
        { name: 'name', type: 'String' },
        {
            name: 'coord',
            type: 'Object',
            fields: [
                { name: 'lon', type: 'Number' },
                { name: 'lat', type: 'Number' },
            ],
        },
        {
            name: 'main',
            type: 'Object',
            fields: [
                { name: 'temp', type: 'Number' },
                { name: 'feels_like', type: 'Number' },
                { name: 'temp_min', type: 'Number' },
                { name: 'temp_max', type: 'Number' },
                { name: 'pressure', type: 'Number' },
                { name: 'humidity', type: 'Number' },
            ],
        },
        { name: 'visibility', type: 'Number' },
        {
            name: 'wind',
            type: 'Object',
            fields: [
                { name: 'speed', type: 'Number' },
                { name: 'deg', type: 'Number' },
            ],
        },
        {
            name: 'clouds',
            type: 'Object',
            fields: [
                { name: 'all', type: 'Number' },
            ],
        },
        { name: 'dt', type: 'Number' },
        {
            name: 'sys',
            type: 'Object',
            fields: [
                { name: 'type', type: 'Number' },
                { name: 'id', type: 'Number' },
                { name: 'country', type: 'String' },
                { name: 'sunrise', type: 'Number' },
                { name: 'sunset', type: 'Number' },
            ],
        },
        { name: 'timezone', type: 'Number' },
        {
            name: 'weather',
            type: 'Array',
            items: {
                type: 'Object',
                fields: [
                    { name: 'id', type: 'Number' },
                    { name: 'main', type: 'String' },
                    { name: 'description', type: 'String' },
                    { name: 'icon', type: 'String' },
                ],
            },
        },
    ],
};
