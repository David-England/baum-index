from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def get_common_trees():
    # According to the NBN Atlas
    return jsonify(
        [
            {"name": "Hawthorn", "latin_name": "Crataegus monogyna", "is_native": True},
            {"name": "Ash", "latin_name": "Fraxinus excelsior", "is_native": True},
            {"name": "Sycamore", "latin_name": "Acer pseudoplatanus", "is_native": False},
            {"name": "Elder", "latin_name": "Sambucus nigra", "is_native": True},
            {"name": "Hazel", "latin_name": "Corylus avellana", "is_native": True},
            {"name": "English Oak", "latin_name": "Quercus robur", "is_native": True},
            {"name": "Holly", "latin_name": "Ilex aquifolium", "is_native": True},
            {"name": "Blackthorn", "latin_name": "Prunus spinosa", "is_native": True},
            {"name": "Alder", "latin_name": "Alnus glutinosa", "is_native": True},
            {"name": "Common Sallow", "latin_name": "Salix cinerea", "is_native": True},
            {"name": "Beech", "latin_name": "Fagus sylvatica", "is_native": True},
            {"name": "Rowan / Mountain Ash", "latin_name": "Sorbus aucuparia", "is_native": True},
            {"name": "Silver Birch", "latin_name": "Betula pendula", "is_native": True},
            {"name": "Field Maple", "latin_name": "Acer campestre", "is_native": True},
            {"name": "Goat Willow", "latin_name": "Salix caprea", "is_native": True},
            {"name": "Wych Elm", "latin_name": "Ulmus glabra", "is_native": True},
            {"name": "Downy Birch", "latin_name": "Betula pubescens", "is_native": True},
            {"name": "Scots Pine", "latin_name": "Pinus sylvestris", "is_native": True},
            {"name": "Rhododendron", "latin_name": "Rhododendron ponticum", "is_native": False},
            {"name": "Horse Chestnut", "latin_name": "Aesculus hippocastanum", "is_native": False},
        ]
    )
