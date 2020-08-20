var people = {
    records: [
        {name: "Alice", city: "Princeton", country: " USA"},
        {name: "Bob", city: "Berlin", country: " USA"},
        {name: "CCC", city: "CA", country: " USA"},
        {name: "LK", city: "YanTai", country: " CN"},
        {name: "Alice", city: "Princeton", country: " USA"},
        {name: "Alice", city: "Princeton", country: " USA"},
        {name: "Alice", city: "Princeton", country: " USA"}
    ]
};

exports.getPersons = function(req, res){
    res.json(people.records);
}

exports.getPerson = function(req,res){
    var index = req.params.index;
    res.json(people.records[index]);
}

exports.postPersons = function(req, res){
    var person = req.body;
    people.records.push(person);
    res.json(people.records);
}