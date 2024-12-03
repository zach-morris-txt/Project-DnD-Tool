const equipmentArray = [
    {
      "index": "club",
      "name": "Club",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 1,
        "unit": "sp"
      },
      "damage": {
        "damage_dice": "1d4",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [
        {
          "index": "light",
          "name": "Light",
          "url": "/api/weapon-properties/light"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "url": "/api/equipment/club"
    },
    {
      "index": "dagger",
      "name": "Dagger",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d4",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 1,
      "properties": [
        {
          "index": "finesse",
          "name": "Finesse",
          "url": "/api/weapon-properties/finesse"
        },
        {
          "index": "light",
          "name": "Light",
          "url": "/api/weapon-properties/light"
        },
        {
          "index": "thrown",
          "name": "Thrown",
          "url": "/api/weapon-properties/thrown"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "throw_range": {
        "normal": 20,
        "long": 60
      },
      "url": "/api/equipment/dagger"
    },
    {
      "index": "greatclub",
      "name": "Greatclub",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 2,
        "unit": "sp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 10,
      "properties": [
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/greatclub"
    },
    {
      "index": "handaxe",
      "name": "Handaxe",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [
        {
          "index": "light",
          "name": "Light",
          "url": "/api/weapon-properties/light"
        },
        {
          "index": "thrown",
          "name": "Thrown",
          "url": "/api/weapon-properties/thrown"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "throw_range": {
        "normal": 20,
        "long": 60
      },
      "url": "/api/equipment/handaxe"
    },
    {
      "index": "javelin",
      "name": "Javelin",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [
        {
          "index": "thrown",
          "name": "Thrown",
          "url": "/api/weapon-properties/thrown"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "throw_range": {
        "normal": 30,
        "long": 120
      },
      "url": "/api/equipment/javelin"
    },
    {
      "index": "light-hammer",
      "name": "Light hammer",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d4",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [
        {
          "index": "light",
          "name": "Light",
          "url": "/api/weapon-properties/light"
        },
        {
          "index": "thrown",
          "name": "Thrown",
          "url": "/api/weapon-properties/thrown"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "throw_range": {
        "normal": 20,
        "long": 60
      },
      "url": "/api/equipment/light-hammer"
    },
    {
      "index": "mace",
      "name": "Mace",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 4,
      "properties": [
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "url": "/api/equipment/mace"
    },
    {
      "index": "quarterstaff",
      "name": "Quarterstaff",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 2,
        "unit": "sp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 4,
      "properties": [
        {
          "index": "versatile",
          "name": "Versatile",
          "url": "/api/weapon-properties/versatile"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "two_handed_damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "url": "/api/equipment/quarterstaff"
    },
    {
      "index": "sickle",
      "name": "Sickle",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d4",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [
        {
          "index": "light",
          "name": "Light",
          "url": "/api/weapon-properties/light"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "url": "/api/equipment/sickle"
    },
    {
      "index": "spear",
      "name": "Spear",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Melee",
      "category_range": "Simple Melee",
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 3,
      "properties": [
        {
          "index": "thrown",
          "name": "Thrown",
          "url": "/api/weapon-properties/thrown"
        },
        {
          "index": "versatile",
          "name": "Versatile",
          "url": "/api/weapon-properties/versatile"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "throw_range": {
        "normal": 20,
        "long": 60
      },
      "two_handed_damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "url": "/api/equipment/spear"
    },
    {
      "index": "crossbow-light",
      "name": "Crossbow, light",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Ranged",
      "category_range": "Simple Ranged",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 80,
        "long": 320
      },
      "weight": 5,
      "properties": [
        {
          "index": "ammunition",
          "name": "Ammunition",
          "url": "/api/weapon-properties/ammunition"
        },
        {
          "index": "loading",
          "name": "Loading",
          "url": "/api/weapon-properties/loading"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/crossbow-light"
    },
    {
      "index": "dart",
      "name": "Dart",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Ranged",
      "category_range": "Simple Ranged",
      "cost": {
        "quantity": 5,
        "unit": "cp"
      },
      "damage": {
        "damage_dice": "1d4",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 20,
        "long": 60
      },
      "weight": 0.25,
      "properties": [
        {
          "index": "finesse",
          "name": "Finesse",
          "url": "/api/weapon-properties/finesse"
        },
        {
          "index": "thrown",
          "name": "Thrown",
          "url": "/api/weapon-properties/thrown"
        }
      ],
      "throw_range": {
        "normal": 20,
        "long": 60
      },
      "url": "/api/equipment/dart"
    },
    {
      "index": "shortbow",
      "name": "Shortbow",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Ranged",
      "category_range": "Simple Ranged",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 80,
        "long": 320
      },
      "weight": 2,
      "properties": [
        {
          "index": "ammunition",
          "name": "Ammunition",
          "url": "/api/weapon-properties/ammunition"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/shortbow"
    },
    {
      "index": "sling",
      "name": "Sling",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Simple",
      "weapon_range": "Ranged",
      "category_range": "Simple Ranged",
      "cost": {
        "quantity": 1,
        "unit": "sp"
      },
      "damage": {
        "damage_dice": "1d4",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 30,
        "long": 120
      },
      "weight": 0,
      "properties": [
        {
          "index": "ammunition",
          "name": "Ammunition",
          "url": "/api/weapon-properties/ammunition"
        }
      ],
      "url": "/api/equipment/sling"
    },
    {
      "index": "battleaxe",
      "name": "Battleaxe",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 4,
      "properties": [
        {
          "index": "versatile",
          "name": "Versatile",
          "url": "/api/weapon-properties/versatile"
        }
      ],
      "two_handed_damage": {
        "damage_dice": "1d10",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "url": "/api/equipment/battleaxe"
    },
    {
      "index": "flail",
      "name": "Flail",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [],
      "url": "/api/equipment/flail"
    },
    {
      "index": "glaive",
      "name": "Glaive",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d10",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 6,
      "properties": [
        {
          "index": "heavy",
          "name": "Heavy",
          "url": "/api/weapon-properties/heavy"
        },
        {
          "index": "reach",
          "name": "Reach",
          "url": "/api/weapon-properties/reach"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/glaive"
    },
    {
      "index": "greataxe",
      "name": "Greataxe",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 30,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d12",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 7,
      "properties": [
        {
          "index": "heavy",
          "name": "Heavy",
          "url": "/api/weapon-properties/heavy"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/greataxe"
    },
    {
      "index": "greatsword",
      "name": "Greatsword",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "2d6",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 6,
      "properties": [
        {
          "index": "heavy",
          "name": "Heavy",
          "url": "/api/weapon-properties/heavy"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/greatsword"
    },
    {
      "index": "halberd",
      "name": "Halberd",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d10",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 6,
      "properties": [
        {
          "index": "heavy",
          "name": "Heavy",
          "url": "/api/weapon-properties/heavy"
        },
        {
          "index": "reach",
          "name": "Reach",
          "url": "/api/weapon-properties/reach"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/halberd"
    },
    {
      "index": "lance",
      "name": "Lance",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d12",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 6,
      "properties": [
        {
          "index": "reach",
          "name": "Reach",
          "url": "/api/weapon-properties/reach"
        },
        {
          "index": "special",
          "name": "Special",
          "url": "/api/weapon-properties/special"
        }
      ],
      "special": [
        "You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted."
      ],
      "url": "/api/equipment/lance"
    },
    {
      "index": "longsword",
      "name": "Longsword",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 15,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 3,
      "properties": [
        {
          "index": "versatile",
          "name": "Versatile",
          "url": "/api/weapon-properties/versatile"
        }
      ],
      "two_handed_damage": {
        "damage_dice": "1d10",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "url": "/api/equipment/longsword"
    },
    {
      "index": "maul",
      "name": "Maul",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "2d6",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 10,
      "properties": [
        {
          "index": "heavy",
          "name": "Heavy",
          "url": "/api/weapon-properties/heavy"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/maul"
    },
    {
      "index": "morningstar",
      "name": "Morningstar",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 15,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 4,
      "properties": [],
      "url": "/api/equipment/morningstar"
    },
    {
      "index": "pike",
      "name": "Pike",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d10",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 18,
      "properties": [
        {
          "index": "heavy",
          "name": "Heavy",
          "url": "/api/weapon-properties/heavy"
        },
        {
          "index": "reach",
          "name": "Reach",
          "url": "/api/weapon-properties/reach"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/pike"
    },
    {
      "index": "rapier",
      "name": "Rapier",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [
        {
          "index": "finesse",
          "name": "Finesse",
          "url": "/api/weapon-properties/finesse"
        }
      ],
      "url": "/api/equipment/rapier"
    },
    {
      "index": "scimitar",
      "name": "Scimitar",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 3,
      "properties": [
        {
          "index": "finesse",
          "name": "Finesse",
          "url": "/api/weapon-properties/finesse"
        },
        {
          "index": "light",
          "name": "Light",
          "url": "/api/weapon-properties/light"
        }
      ],
      "url": "/api/equipment/scimitar"
    },
    {
      "index": "shortsword",
      "name": "Shortsword",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [
        {
          "index": "finesse",
          "name": "Finesse",
          "url": "/api/weapon-properties/finesse"
        },
        {
          "index": "light",
          "name": "Light",
          "url": "/api/weapon-properties/light"
        },
        {
          "index": "monk",
          "name": "Monk",
          "url": "/api/weapon-properties/monk"
        }
      ],
      "url": "/api/equipment/shortsword"
    },
    {
      "index": "trident",
      "name": "Trident",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 4,
      "properties": [
        {
          "index": "thrown",
          "name": "Thrown",
          "url": "/api/weapon-properties/thrown"
        },
        {
          "index": "versatile",
          "name": "Versatile",
          "url": "/api/weapon-properties/versatile"
        }
      ],
      "throw_range": {
        "normal": 20,
        "long": 60
      },
      "two_handed_damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "url": "/api/equipment/trident"
    },
    {
      "index": "war-pick",
      "name": "War pick",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [],
      "url": "/api/equipment/war-pick"
    },
    {
      "index": "warhammer",
      "name": "Warhammer",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 15,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 2,
      "properties": [
        {
          "index": "versatile",
          "name": "Versatile",
          "url": "/api/weapon-properties/versatile"
        }
      ],
      "two_handed_damage": {
        "damage_dice": "1d10",
        "damage_type": {
          "index": "bludgeoning",
          "name": "Bludgeoning",
          "url": "/api/damage-types/bludgeoning"
        }
      },
      "url": "/api/equipment/warhammer"
    },
    {
      "index": "whip",
      "name": "Whip",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Melee",
      "category_range": "Martial Melee",
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d4",
        "damage_type": {
          "index": "slashing",
          "name": "Slashing",
          "url": "/api/damage-types/slashing"
        }
      },
      "range": {
        "normal": 5
      },
      "weight": 3,
      "properties": [
        {
          "index": "finesse",
          "name": "Finesse",
          "url": "/api/weapon-properties/finesse"
        },
        {
          "index": "reach",
          "name": "Reach",
          "url": "/api/weapon-properties/reach"
        }
      ],
      "url": "/api/equipment/whip"
    },
    {
      "index": "blowgun",
      "name": "Blowgun",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Ranged",
      "category_range": "Martial Ranged",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 25,
        "long": 100
      },
      "weight": 1,
      "properties": [
        {
          "index": "ammunition",
          "name": "Ammunition",
          "url": "/api/weapon-properties/ammunition"
        },
        {
          "index": "loading",
          "name": "Loading",
          "url": "/api/weapon-properties/loading"
        }
      ],
      "url": "/api/equipment/blowgun"
    },
    {
      "index": "crossbow-hand",
      "name": "Crossbow, hand",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Ranged",
      "category_range": "Martial Ranged",
      "cost": {
        "quantity": 75,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d6",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 30,
        "long": 120
      },
      "weight": 3,
      "properties": [
        {
          "index": "ammunition",
          "name": "Ammunition",
          "url": "/api/weapon-properties/ammunition"
        },
        {
          "index": "light",
          "name": "Light",
          "url": "/api/weapon-properties/light"
        },
        {
          "index": "loading",
          "name": "Loading",
          "url": "/api/weapon-properties/loading"
        }
      ],
      "url": "/api/equipment/crossbow-hand"
    },
    {
      "index": "crossbow-heavy",
      "name": "Crossbow, heavy",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Ranged",
      "category_range": "Martial Ranged",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d10",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 100,
        "long": 400
      },
      "weight": 18,
      "properties": [
        {
          "index": "ammunition",
          "name": "Ammunition",
          "url": "/api/weapon-properties/ammunition"
        },
        {
          "index": "heavy",
          "name": "Heavy",
          "url": "/api/weapon-properties/heavy"
        },
        {
          "index": "loading",
          "name": "Loading",
          "url": "/api/weapon-properties/loading"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/crossbow-heavy"
    },
    {
      "index": "longbow",
      "name": "Longbow",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Ranged",
      "category_range": "Martial Ranged",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "damage": {
        "damage_dice": "1d8",
        "damage_type": {
          "index": "piercing",
          "name": "Piercing",
          "url": "/api/damage-types/piercing"
        }
      },
      "range": {
        "normal": 150,
        "long": 600
      },
      "weight": 2,
      "properties": [
        {
          "index": "ammunition",
          "name": "Ammunition",
          "url": "/api/weapon-properties/ammunition"
        },
        {
          "index": "heavy",
          "name": "Heavy",
          "url": "/api/weapon-properties/heavy"
        },
        {
          "index": "two-handed",
          "name": "Two-Handed",
          "url": "/api/weapon-properties/two-handed"
        }
      ],
      "url": "/api/equipment/longbow"
    },
    {
      "index": "net",
      "name": "Net",
      "equipment_category": {
        "index": "weapon",
        "name": "Weapon",
        "url": "/api/equipment-categories/weapon"
      },
      "weapon_category": "Martial",
      "weapon_range": "Ranged",
      "category_range": "Martial Ranged",
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "range": {
        "normal": 5,
        "long": 15
      },
      "weight": 3,
      "properties": [
        {
          "index": "thrown",
          "name": "Thrown",
          "url": "/api/weapon-properties/thrown"
        },
        {
          "index": "special",
          "name": "Special",
          "url": "/api/weapon-properties/special"
        }
      ],
      "special": [
        "A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make."
      ],
      "throw_range": {
        "normal": 5,
        "long": 15
      },
      "url": "/api/equipment/net"
    },
    {
      "index": "padded-armor",
      "name": "Padded Armor",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Light",
      "armor_class": {
        "base": 11,
        "dex_bonus": true
      },
      "str_minimum": 0,
      "stealth_disadvantage": true,
      "weight": 8,
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "url": "/api/equipment/padded-armor"
    },
    {
      "index": "leather-armor",
      "name": "Leather Armor",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Light",
      "armor_class": {
        "base": 11,
        "dex_bonus": true
      },
      "str_minimum": 0,
      "stealth_disadvantage": false,
      "weight": 10,
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "url": "/api/equipment/leather-armor"
    },
    {
      "index": "studded-leather-armor",
      "name": "Studded Leather Armor",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Light",
      "armor_class": {
        "base": 12,
        "dex_bonus": true
      },
      "str_minimum": 0,
      "stealth_disadvantage": false,
      "weight": 13,
      "cost": {
        "quantity": 45,
        "unit": "gp"
      },
      "url": "/api/equipment/studded-leather-armor"
    },
    {
      "index": "hide-armor",
      "name": "Hide Armor",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Medium",
      "armor_class": {
        "base": 12,
        "dex_bonus": true,
        "max_bonus": 2
      },
      "str_minimum": 0,
      "stealth_disadvantage": false,
      "weight": 12,
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "url": "/api/equipment/hide-armor"
    },
    {
      "index": "chain-shirt",
      "name": "Chain Shirt",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Medium",
      "armor_class": {
        "base": 13,
        "dex_bonus": true,
        "max_bonus": 2
      },
      "str_minimum": 0,
      "stealth_disadvantage": false,
      "weight": 20,
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "url": "/api/equipment/chain-shirt"
    },
    {
      "index": "scale-mail",
      "name": "Scale Mail",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Medium",
      "armor_class": {
        "base": 14,
        "dex_bonus": true,
        "max_bonus": 2
      },
      "str_minimum": 0,
      "stealth_disadvantage": true,
      "weight": 45,
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "url": "/api/equipment/scale-mail"
    },
    {
      "index": "breastplate",
      "name": "Breastplate",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Medium",
      "armor_class": {
        "base": 14,
        "dex_bonus": true,
        "max_bonus": 2
      },
      "str_minimum": 0,
      "stealth_disadvantage": false,
      "weight": 20,
      "cost": {
        "quantity": 400,
        "unit": "gp"
      },
      "url": "/api/equipment/breastplate"
    },
    {
      "index": "half-plate-armor",
      "name": "Half Plate Armor",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Medium",
      "armor_class": {
        "base": 15,
        "dex_bonus": true,
        "max_bonus": 2
      },
      "str_minimum": 0,
      "stealth_disadvantage": true,
      "weight": 40,
      "cost": {
        "quantity": 750,
        "unit": "gp"
      },
      "url": "/api/equipment/half-plate-armor"
    },
    {
      "index": "ring-mail",
      "name": "Ring Mail",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Heavy",
      "armor_class": {
        "base": 14,
        "dex_bonus": false
      },
      "str_minimum": 0,
      "stealth_disadvantage": true,
      "weight": 40,
      "cost": {
        "quantity": 30,
        "unit": "gp"
      },
      "url": "/api/equipment/ring-mail"
    },
    {
      "index": "chain-mail",
      "name": "Chain Mail",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Heavy",
      "armor_class": {
        "base": 16,
        "dex_bonus": false
      },
      "str_minimum": 13,
      "stealth_disadvantage": true,
      "weight": 55,
      "cost": {
        "quantity": 75,
        "unit": "gp"
      },
      "url": "/api/equipment/chain-mail"
    },
    {
      "index": "splint-armor",
      "name": "Splint Armor",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Heavy",
      "armor_class": {
        "base": 17,
        "dex_bonus": false
      },
      "str_minimum": 15,
      "stealth_disadvantage": true,
      "weight": 60,
      "cost": {
        "quantity": 200,
        "unit": "gp"
      },
      "url": "/api/equipment/splint-armor"
    },
    {
      "index": "plate-armor",
      "name": "Plate Armor",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Heavy",
      "armor_class": {
        "base": 18,
        "dex_bonus": false
      },
      "str_minimum": 15,
      "stealth_disadvantage": true,
      "weight": 65,
      "cost": {
        "quantity": 1500,
        "unit": "gp"
      },
      "url": "/api/equipment/plate-armor"
    },
    {
      "index": "shield",
      "name": "Shield",
      "equipment_category": {
        "index": "armor",
        "name": "Armor",
        "url": "/api/equipment-categories/armor"
      },
      "armor_category": "Shield",
      "armor_class": {
        "base": 2,
        "dex_bonus": false
      },
      "str_minimum": 0,
      "stealth_disadvantage": false,
      "weight": 6,
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "url": "/api/equipment/shield"
    },
    {
      "index": "abacus",
      "name": "Abacus",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 2,
      "url": "/api/equipment/abacus"
    },
    {
      "index": "acid-vial",
      "name": "Acid (vial)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon.",
        "On a hit, the target takes 2d6 acid damage."
      ],
      "url": "/api/equipment/acid-vial"
    },
    {
      "index": "alchemists-fire-flask",
      "name": "Alchemist's fire (flask)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "desc": [
        "This sticky, adhesive fluid ignites when exposed to air.",
        "As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon.",
        "On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."
      ],
      "weight": 1,
      "url": "/api/equipment/alchemists-fire-flask"
    },
    {
      "index": "alms-box",
      "name": "Alms box",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 0,
        "unit": "cp"
      },
      "weight": 0,
      "desc": ["A small box for alms, typically found in a priest's pack."],
      "url": "/api/equipment/alms-box"
    },
    {
      "index": "arrow",
      "name": "Arrow",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "ammunition",
        "name": "Ammunition",
        "url": "/api/equipment-categories/ammunition"
      },
      "quantity": 20,
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 1,
      "url": "/api/equipment/arrow"
    },
    {
      "index": "block-of-incense",
      "name": "Block of incense",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 0,
        "unit": "cp"
      },
      "weight": 0,
      "desc": ["A block of incense, typically found in a priest's pack."],
      "url": "/api/equipment/block-of-incense"
    },
    {
      "index": "blowgun-needle",
      "name": "Blowgun needle",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "ammunition",
        "name": "Ammunition",
        "url": "/api/equipment-categories/ammunition"
      },
      "quantity": 50,
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 1,
      "url": "/api/equipment/blowgun-needle"
    },
    {
      "index": "censer",
      "name": "Censer",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 0,
        "unit": "cp"
      },
      "weight": 0,
      "desc": ["A censer, typically found in a priest's pack."],
      "url": "/api/equipment/censer"
    },
    {
      "index": "crossbow-bolt",
      "name": "Crossbow bolt",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "ammunition",
        "name": "Ammunition",
        "url": "/api/equipment-categories/ammunition"
      },
      "quantity": 20,
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 1.5,
      "url": "/api/equipment/crossbow-bolt"
    },
    {
      "index": "sling-bullet",
      "name": "Sling bullet",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "ammunition",
        "name": "Ammunition",
        "url": "/api/equipment-categories/ammunition"
      },
      "quantity": 20,
      "cost": {
        "quantity": 4,
        "unit": "cp"
      },
      "weight": 1.5,
      "url": "/api/equipment/sling-bullet"
    },
    {
      "index": "amulet",
      "name": "Amulet",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "holy-symbols",
        "name": "Holy Symbols",
        "url": "/api/equipment-categories/holy-symbols"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.",
        "Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
      ],
      "url": "/api/equipment/amulet"
    },
    {
      "index": "antitoxin-vial",
      "name": "Antitoxin (vial)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "weight": 0,
      "desc": [
        "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."
      ],
      "url": "/api/equipment/antitoxin-vial"
    },
    {
      "index": "crystal",
      "name": "Crystal",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "arcane-foci",
        "name": "Arcane Foci",
        "url": "/api/equipment-categories/arcane-foci"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
      ],
      "url": "/api/equipment/crystal"
    },
    {
      "index": "orb",
      "name": "Orb",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "arcane-foci",
        "name": "Arcane Foci",
        "url": "/api/equipment-categories/arcane-foci"
      },
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "weight": 3,
      "desc": [
        "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
      ],
      "url": "/api/equipment/orb"
    },
    {
      "index": "rod",
      "name": "Rod",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "arcane-foci",
        "name": "Arcane Foci",
        "url": "/api/equipment-categories/arcane-foci"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
      ],
      "url": "/api/equipment/rod"
    },
    {
      "index": "staff",
      "name": "Staff",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "arcane-foci",
        "name": "Arcane Foci",
        "url": "/api/equipment-categories/arcane-foci"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 4,
      "desc": [
        "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
      ],
      "url": "/api/equipment/staff"
    },
    {
      "index": "wand",
      "name": "Wand",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "arcane-foci",
        "name": "Arcane Foci",
        "url": "/api/equipment-categories/arcane-foci"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "An arcane focus is a special item--an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item--designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus."
      ],
      "url": "/api/equipment/wand"
    },
    {
      "index": "backpack",
      "name": "Backpack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 5,
      "url": "/api/equipment/backpack"
    },
    {
      "index": "ball-bearings-bag-of-1000",
      "name": "Ball bearings (bag of 1,000)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side.",
        "A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone.",
        "A creature moving through the area at half speed doesn't need to make the save."
      ],
      "url": "/api/equipment/ball-bearings-bag-of-1000"
    },
    {
      "index": "barrel",
      "name": "Barrel",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 70,
      "url": "/api/equipment/barrel"
    },
    {
      "index": "basket",
      "name": "Basket",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 4,
        "unit": "sp"
      },
      "weight": 2,
      "url": "/api/equipment/basket"
    },
    {
      "index": "bedroll",
      "name": "Bedroll",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 7,
      "url": "/api/equipment/bedroll"
    },
    {
      "index": "bell",
      "name": "Bell",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 0,
      "url": "/api/equipment/bell"
    },
    {
      "index": "blanket",
      "name": "Blanket",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 3,
      "url": "/api/equipment/blanket"
    },
    {
      "index": "block-and-tackle",
      "name": "Block and tackle",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift."
      ],
      "url": "/api/equipment/block-and-tackle"
    },
    {
      "index": "book",
      "name": "Book",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later in this section)."
      ],
      "url": "/api/equipment/book"
    },
    {
      "index": "bottle-glass",
      "name": "Bottle, glass",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 2,
      "url": "/api/equipment/bottle-glass"
    },
    {
      "index": "bucket",
      "name": "Bucket",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "cp"
      },
      "weight": 2,
      "url": "/api/equipment/bucket"
    },
    {
      "index": "caltrops",
      "name": "Caltrops",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "cp"
      },
      "weight": 2,
      "desc": [
        "As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side.",
        "Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage.",
        "Taking this damage reduces the creature's walking speed by 10 feet until the creature regains at least 1 hit point.",
        "A creature moving through the area at half speed doesn't need to make the save."
      ],
      "url": "/api/equipment/caltrops"
    },
    {
      "index": "candle",
      "name": "Candle",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "cp"
      },
      "weight": 0,
      "desc": [
        "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet."
      ],
      "url": "/api/equipment/candle"
    },
    {
      "index": "case-crossbow-bolt",
      "name": "Case, crossbow bolt",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 1,
      "desc": ["This wooden case can hold up to twenty crossbow bolts."],
      "url": "/api/equipment/case-crossbow-bolt"
    },
    {
      "index": "case-map-or-scroll",
      "name": "Case, map or scroll",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment."
      ],
      "url": "/api/equipment/case-map-or-scroll"
    },
    {
      "index": "chain-10-feet",
      "name": "Chain (10 feet)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 10,
      "desc": [
        "A chain has 10 hit points. It can be burst with a successful DC 20 Strength check."
      ],
      "url": "/api/equipment/chain-10-feet"
    },
    {
      "index": "chalk-1-piece",
      "name": "Chalk (1 piece)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "cp"
      },
      "weight": 0,
      "url": "/api/equipment/chalk-1-piece"
    },
    {
      "index": "chest",
      "name": "Chest",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 25,
      "url": "/api/equipment/chest"
    },
    {
      "index": "clothes-common",
      "name": "Clothes, common",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 3,
      "url": "/api/equipment/clothes-common"
    },
    {
      "index": "clothes-costume",
      "name": "Clothes, costume",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 4,
      "url": "/api/equipment/clothes-costume"
    },
    {
      "index": "clothes-fine",
      "name": "Clothes, fine",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 15,
        "unit": "gp"
      },
      "weight": 6,
      "url": "/api/equipment/clothes-fine"
    },
    {
      "index": "clothes-travelers",
      "name": "Clothes, traveler's",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 4,
      "url": "/api/equipment/clothes-travelers"
    },
    {
      "index": "component-pouch",
      "name": "Component pouch",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description)."
      ],
      "url": "/api/equipment/component-pouch"
    },
    {
      "index": "crowbar",
      "name": "Crowbar",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied."
      ],
      "url": "/api/equipment/crowbar"
    },
    {
      "index": "sprig-of-mistletoe",
      "name": "Sprig of mistletoe",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "druidic-foci",
        "name": "Druidic Foci",
        "url": "/api/equipment-categories/druidic-foci"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 0,
      "desc": [
        "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus."
      ],
      "url": "/api/equipment/sprig-of-mistletoe"
    },
    {
      "index": "totem",
      "name": "Totem",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "druidic-foci",
        "name": "Druidic Foci",
        "url": "/api/equipment-categories/druidic-foci"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 0,
      "desc": [
        "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus."
      ],
      "url": "/api/equipment/totem"
    },
    {
      "index": "wooden-staff",
      "name": "Wooden staff",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "druidic-foci",
        "name": "Druidic Foci",
        "url": "/api/equipment-categories/druidic-foci"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 4,
      "desc": [
        "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus."
      ],
      "url": "/api/equipment/wooden-staff"
    },
    {
      "index": "yew-wand",
      "name": "Yew wand",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "druidic-foci",
        "name": "Druidic Foci",
        "url": "/api/equipment-categories/druidic-foci"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus."
      ],
      "url": "/api/equipment/yew-wand"
    },
    {
      "index": "emblem",
      "name": "Emblem",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "holy-symbols",
        "name": "Holy Symbols",
        "url": "/api/equipment-categories/holy-symbols"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 0,
      "desc": [
        "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.",
        "Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
      ],
      "url": "/api/equipment/emblem"
    },
    {
      "index": "fishing-tackle",
      "name": "Fishing tackle",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 4,
      "desc": [
        "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."
      ],
      "url": "/api/equipment/fishing-tackle"
    },
    {
      "index": "flask-or-tankard",
      "name": "Flask or tankard",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "cp"
      },
      "weight": 1,
      "url": "/api/equipment/flask-or-tankard"
    },
    {
      "index": "grappling-hook",
      "name": "Grappling hook",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 4,
      "url": "/api/equipment/grappling-hook"
    },
    {
      "index": "hammer",
      "name": "Hammer",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 3,
      "url": "/api/equipment/hammer"
    },
    {
      "index": "hammer-sledge",
      "name": "Hammer, sledge",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 10,
      "url": "/api/equipment/hammer-sledge"
    },
    {
      "index": "holy-water-flask",
      "name": "Holy water (flask)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon.",
        "If the target is a fiend or undead, it takes 2d6 radiant damage.",
        "A cleric or paladin may create holy water by performing a special ritual.",
        "The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot."
      ],
      "url": "/api/equipment/holy-water-flask"
    },
    {
      "index": "hourglass",
      "name": "Hourglass",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 1,
      "url": "/api/equipment/hourglass"
    },
    {
      "index": "hunting-trap",
      "name": "Hunting trap",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "desc": [
        "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground.",
        "A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long).",
        "A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."
      ],
      "weight": 25,
      "url": "/api/equipment/hunting-trap"
    },
    {
      "index": "ink-1-ounce-bottle",
      "name": "Ink (1 ounce bottle)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 0,
      "url": "/api/equipment/ink-1-ounce-bottle"
    },
    {
      "index": "ink-pen",
      "name": "Ink pen",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "cp"
      },
      "weight": 0,
      "url": "/api/equipment/ink-pen"
    },
    {
      "index": "jug-or-pitcher",
      "name": "Jug or pitcher",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "cp"
      },
      "weight": 4,
      "url": "/api/equipment/jug-or-pitcher"
    },
    {
      "index": "climbers-kit",
      "name": "Climber's Kit",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "kits",
        "name": "Kits",
        "url": "/api/equipment-categories/kits"
      },
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 12,
      "desc": [
        "A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor."
      ],
      "url": "/api/equipment/climbers-kit"
    },
    {
      "index": "disguise-kit",
      "name": "Disguise Kit",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "kits",
        "name": "Kits",
        "url": "/api/equipment-categories/kits"
      },
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 3,
      "desc": [
        "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise."
      ],
      "url": "/api/equipment/disguise-kit"
    },
    {
      "index": "forgery-kit",
      "name": "Forgery Kit",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "kits",
        "name": "Kits",
        "url": "/api/equipment-categories/kits"
      },
      "cost": {
        "quantity": 15,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document."
      ],
      "url": "/api/equipment/forgery-kit"
    },
    {
      "index": "herbalism-kit",
      "name": "Herbalism Kit",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "kits",
        "name": "Kits",
        "url": "/api/equipment-categories/kits"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 3,
      "desc": [
        "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing."
      ],
      "url": "/api/equipment/herbalism-kit"
    },
    {
      "index": "healers-kit",
      "name": "Healer's Kit",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "kits",
        "name": "Kits",
        "url": "/api/equipment-categories/kits"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 3,
      "desc": [
        "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check."
      ],
      "url": "/api/equipment/healers-kit"
    },
    {
      "index": "mess-kit",
      "name": "Mess Kit",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "kits",
        "name": "Kits",
        "url": "/api/equipment-categories/kits"
      },
      "cost": {
        "quantity": 2,
        "unit": "sp"
      },
      "weight": 1,
      "desc": [
        "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."
      ],
      "url": "/api/equipment/mess-kit"
    },
    {
      "index": "poisoners-kit",
      "name": "Poisoner's Kit",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "kits",
        "name": "Kits",
        "url": "/api/equipment-categories/kits"
      },
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons."
      ],
      "url": "/api/equipment/poisoners-kit"
    },
    {
      "index": "ladder-10-foot",
      "name": "Ladder (10-foot)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "sp"
      },
      "weight": 25,
      "url": "/api/equipment/ladder-10-foot"
    },
    {
      "index": "lamp",
      "name": "Lamp",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 1,
      "desc": [
        "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
      ],
      "url": "/api/equipment/lamp"
    },
    {
      "index": "lantern-bullseye",
      "name": "Lantern, bullseye",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
      ],
      "url": "/api/equipment/lantern-bullseye"
    },
    {
      "index": "lantern-hooded",
      "name": "Lantern, hooded",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
      ],
      "url": "/api/equipment/lantern-hooded"
    },
    {
      "index": "little-bag-of-sand",
      "name": "Little bag of sand",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 0,
        "unit": "cp"
      },
      "weight": 0,
      "desc": ["A small bag of sand, typically found in a scholar's pack."],
      "url": "/api/equipment/little-bag-of-sand"
    },
    {
      "index": "lock",
      "name": "Lock",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "A key is provided with the lock. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check. Your GM may decide that better locks are available for higher prices."
      ],
      "url": "/api/equipment/lock"
    },
    {
      "index": "magnifying-glass",
      "name": "Magnifying glass",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 100,
        "unit": "gp"
      },
      "weight": 0,
      "desc": [
        "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite.",
        "A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed."
      ],
      "url": "/api/equipment/magnifying-glass"
    },
    {
      "index": "manacles",
      "name": "Manacles",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 6,
      "desc": [
        "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check.",
        "Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points."
      ],
      "url": "/api/equipment/manacles"
    },
    {
      "index": "mirror-steel",
      "name": "Mirror, steel",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 0.5,
      "url": "/api/equipment/mirror-steel"
    },
    {
      "index": "oil-flask",
      "name": "Oil (flask)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "sp"
      },
      "weight": 1,
      "desc": [
        "Oil usually comes in a clay flask that holds 1 pint.",
        "As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon.",
        "On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil.",
        "You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level.",
        "If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn."
      ],
      "url": "/api/equipment/oil-flask"
    },
    {
      "index": "paper-one-sheet",
      "name": "Paper (one sheet)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "sp"
      },
      "weight": 0,
      "url": "/api/equipment/paper-one-sheet"
    },
    {
      "index": "parchment-one-sheet",
      "name": "Parchment (one sheet)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "sp"
      },
      "weight": 0,
      "url": "/api/equipment/parchment-one-sheet"
    },
    {
      "index": "perfume-vial",
      "name": "Perfume (vial)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 0,
      "url": "/api/equipment/perfume-vial"
    },
    {
      "index": "pick-miners",
      "name": "Pick, miner's",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 10,
      "url": "/api/equipment/pick-miners"
    },
    {
      "index": "piton",
      "name": "Piton",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "cp"
      },
      "weight": 0.25,
      "url": "/api/equipment/piton"
    },
    {
      "index": "poison-basic-vial",
      "name": "Poison, basic (vial)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 100,
        "unit": "gp"
      },
      "weight": 0,
      "desc": [
        "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying."
      ],
      "url": "/api/equipment/poison-basic-vial"
    },
    {
      "index": "pole-10-foot",
      "name": "Pole (10-foot)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "cp"
      },
      "weight": 7,
      "url": "/api/equipment/pole-10-foot"
    },
    {
      "index": "pot-iron",
      "name": "Pot, iron",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 10,
      "url": "/api/equipment/pot-iron"
    },
    {
      "index": "pouch",
      "name": "Pouch",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 1,
      "desc": [
        "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch (described earlier in this section)."
      ],
      "url": "/api/equipment/pouch"
    },
    {
      "index": "quiver",
      "name": "Quiver",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 1,
      "desc": ["A quiver can hold up to 20 arrows."],
      "url": "/api/equipment/quiver"
    },
    {
      "index": "ram-portable",
      "name": "Ram, portable",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 4,
        "unit": "gp"
      },
      "weight": 35,
      "desc": [
        "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
      ],
      "url": "/api/equipment/ram-portable"
    },
    {
      "index": "rations-1-day",
      "name": "Rations (1 day)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 2,
      "desc": [
        "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
      ],
      "url": "/api/equipment/rations-1-day"
    },
    {
      "index": "reliquary",
      "name": "Reliquary",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "holy-symbols",
        "name": "Holy Symbols",
        "url": "/api/equipment-categories/holy-symbols"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.",
        "Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
      ],
      "url": "/api/equipment/reliquary"
    },
    {
      "index": "robes",
      "name": "Robes",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 4,
      "url": "/api/equipment/robes"
    },
    {
      "index": "rope-hempen-50-feet",
      "name": "Rope, hempen (50 feet)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 10,
      "desc": [
        "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
      ],
      "url": "/api/equipment/rope-hempen-50-feet"
    },
    {
      "index": "rope-silk-50-feet",
      "name": "Rope, silk (50 feet)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
      ],
      "url": "/api/equipment/rope-silk-50-feet"
    },
    {
      "index": "sack",
      "name": "Sack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "cp"
      },
      "weight": 0.5,
      "url": "/api/equipment/sack"
    },
    {
      "index": "scale-merchants",
      "name": "Scale, merchant's",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 3,
      "desc": [
        "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."
      ],
      "url": "/api/equipment/scale-merchants"
    },
    {
      "index": "sealing-wax",
      "name": "Sealing wax",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 0,
      "url": "/api/equipment/sealing-wax"
    },
    {
      "index": "shovel",
      "name": "Shovel",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 5,
      "url": "/api/equipment/shovel"
    },
    {
      "index": "signal-whistle",
      "name": "Signal whistle",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "cp"
      },
      "weight": 0,
      "url": "/api/equipment/signal-whistle"
    },
    {
      "index": "signet-ring",
      "name": "Signet ring",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 0,
      "url": "/api/equipment/signet-ring"
    },
    {
      "index": "small-knife",
      "name": "Small knife",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 0,
        "unit": "cp"
      },
      "weight": 0,
      "desc": ["A small knife, typically found in a scholar's pack."],
      "url": "/api/equipment/small-knife"
    },
    {
      "index": "soap",
      "name": "Soap",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "cp"
      },
      "weight": 0,
      "url": "/api/equipment/soap"
    },
    {
      "index": "spellbook",
      "name": "Spellbook",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "weight": 3,
      "desc": [
        "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."
      ],
      "url": "/api/equipment/spellbook"
    },
    {
      "index": "spike-iron",
      "name": "Spike, iron",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "sp"
      },
      "weight": 5,
      "url": "/api/equipment/spike-iron"
    },
    {
      "index": "spyglass",
      "name": "Spyglass",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1000,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "Objects viewed through a spyglass are magnified to twice their size."
      ],
      "url": "/api/equipment/spyglass"
    },
    {
      "index": "string-10-feet",
      "name": "String (10 feet)",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 0,
        "unit": "cp"
      },
      "weight": 0,
      "desc": [
        "A 10-foot length of string, typically found in a burglar's pack."
      ],
      "url": "/api/equipment/string-10-feet"
    },
    {
      "index": "tent-two-person",
      "name": "Tent, two-person",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 20,
      "desc": ["A simple and portable canvas shelter, a tent sleeps two."],
      "url": "/api/equipment/tent-two-person"
    },
    {
      "index": "tinderbox",
      "name": "Tinderbox",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 1,
      "desc": [
        "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch--or anything else with abundant, exposed fuel--takes an action.",
        "Lighting any other fire takes 1 minute."
      ],
      "url": "/api/equipment/tinderbox"
    },
    {
      "index": "torch",
      "name": "Torch",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "cp"
      },
      "weight": 1,
      "desc": [
        "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
      ],
      "url": "/api/equipment/torch"
    },
    {
      "index": "vestments",
      "name": "Vestments",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 0,
        "unit": "cp"
      },
      "weight": 0,
      "desc": ["Religious clothing, typically found in a priest's pack."],
      "url": "/api/equipment/vestments"
    },
    {
      "index": "vial",
      "name": "Vial",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 0,
      "url": "/api/equipment/vial"
    },
    {
      "index": "waterskin",
      "name": "Waterskin",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 2,
        "unit": "sp"
      },
      "weight": 5,
      "url": "/api/equipment/waterskin"
    },
    {
      "index": "whetstone",
      "name": "Whetstone",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "standard-gear",
        "name": "Standard Gear",
        "url": "/api/equipment-categories/standard-gear"
      },
      "cost": {
        "quantity": 1,
        "unit": "cp"
      },
      "weight": 1,
      "url": "/api/equipment/whetstone"
    },
    {
      "index": "burglars-pack",
      "name": "Burglar's Pack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "equipment-packs",
        "name": "Equipment Packs",
        "url": "/api/equipment-categories/equipment-packs"
      },
      "cost": {
        "quantity": 16,
        "unit": "gp"
      },
      "contents": [
        {
          "item": {
            "index": "backpack",
            "name": "Backpack",
            "url": "/api/equipment/backpack"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "ball-bearings-bag-of-1000",
            "name": "Ball bearings (bag of 1,000)",
            "url": "/api/equipment/ball-bearings-bag-of-1000"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "string-10-feet",
            "name": "String (10 feet)",
            "url": "/api/equipment/string-10-feet"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "bell",
            "name": "Bell",
            "url": "/api/equipment/bell"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "candle",
            "name": "Candle",
            "url": "/api/equipment/candle"
          },
          "quantity": 5
        },
        {
          "item": {
            "index": "crowbar",
            "name": "Crowbar",
            "url": "/api/equipment/crowbar"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "hammer",
            "name": "Hammer",
            "url": "/api/equipment/hammer"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "piton",
            "name": "Piton",
            "url": "/api/equipment/piton"
          },
          "quantity": 10
        },
        {
          "item": {
            "index": "lantern-hooded",
            "name": "Lantern, hooded",
            "url": "/api/equipment/lantern-hooded"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "oil-flask",
            "name": "Oil (flask)",
            "url": "/api/equipment/oil-flask"
          },
          "quantity": 2
        },
        {
          "item": {
            "index": "rations-1-day",
            "name": "Rations (1 day)",
            "url": "/api/equipment/rations-1-day"
          },
          "quantity": 5
        },
        {
          "item": {
            "index": "tinderbox",
            "name": "Tinderbox",
            "url": "/api/equipment/tinderbox"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "waterskin",
            "name": "Waterskin",
            "url": "/api/equipment/waterskin"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "rope-hempen-50-feet",
            "name": "Rope, hempen (50 feet)",
            "url": "/api/equipment/rope-hempen-50-feet"
          },
          "quantity": 1
        }
      ],
      "url": "/api/equipment/burglars-pack"
    },
    {
      "index": "diplomats-pack",
      "name": "Diplomat's Pack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "equipment-packs",
        "name": "Equipment Packs",
        "url": "/api/equipment-categories/equipment-packs"
      },
      "cost": {
        "quantity": 39,
        "unit": "gp"
      },
      "contents": [
        {
          "item": {
            "index": "chest",
            "name": "Chest",
            "url": "/api/equipment/chest"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "case-map-or-scroll",
            "name": "Case, map or scroll",
            "url": "/api/equipment/case-map-or-scroll"
          },
          "quantity": 2
        },
        {
          "item": {
            "index": "clothes-fine",
            "name": "Clothes, fine",
            "url": "/api/equipment/clothes-fine"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "ink-1-ounce-bottle",
            "name": "Ink (1 ounce bottle)",
            "url": "/api/equipment/ink-1-ounce-bottle"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "ink-pen",
            "name": "Ink pen",
            "url": "/api/equipment/ink-pen"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "lamp",
            "name": "Lamp",
            "url": "/api/equipment/lamp"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "oil-flask",
            "name": "Oil (flask)",
            "url": "/api/equipment/oil-flask"
          },
          "quantity": 2
        },
        {
          "item": {
            "index": "paper-one-sheet",
            "name": "Paper (one sheet)",
            "url": "/api/equipment/paper-one-sheet"
          },
          "quantity": 5
        },
        {
          "item": {
            "index": "perfume-vial",
            "name": "Perfume (vial)",
            "url": "/api/equipment/perfume-vial"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "sealing-wax",
            "name": "Sealing wax",
            "url": "/api/equipment/sealing-wax"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "soap",
            "name": "Soap",
            "url": "/api/equipment/soap"
          },
          "quantity": 1
        }
      ],
      "url": "/api/equipment/diplomats-pack"
    },
    {
      "index": "dungeoneers-pack",
      "name": "Dungeoneer's Pack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "equipment-packs",
        "name": "Equipment Packs",
        "url": "/api/equipment-categories/equipment-packs"
      },
      "cost": {
        "quantity": 12,
        "unit": "gp"
      },
      "contents": [
        {
          "item": {
            "index": "backpack",
            "name": "Backpack",
            "url": "/api/equipment/backpack"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "crowbar",
            "name": "Crowbar",
            "url": "/api/equipment/crowbar"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "hammer",
            "name": "Hammer",
            "url": "/api/equipment/hammer"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "piton",
            "name": "Piton",
            "url": "/api/equipment/piton"
          },
          "quantity": 10
        },
        {
          "item": {
            "index": "torch",
            "name": "Torch",
            "url": "/api/equipment/torch"
          },
          "quantity": 10
        },
        {
          "item": {
            "index": "tinderbox",
            "name": "Tinderbox",
            "url": "/api/equipment/tinderbox"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "rations-1-day",
            "name": "Rations (1 day)",
            "url": "/api/equipment/rations-1-day"
          },
          "quantity": 10
        },
        {
          "item": {
            "index": "waterskin",
            "name": "Waterskin",
            "url": "/api/equipment/waterskin"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "rope-hempen-50-feet",
            "name": "Rope, hempen (50 feet)",
            "url": "/api/equipment/rope-hempen-50-feet"
          },
          "quantity": 1
        }
      ],
      "url": "/api/equipment/dungeoneers-pack"
    },
    {
      "index": "entertainers-pack",
      "name": "Entertainer's Pack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "equipment-packs",
        "name": "Equipment Packs",
        "url": "/api/equipment-categories/equipment-packs"
      },
      "cost": {
        "quantity": 40,
        "unit": "gp"
      },
      "contents": [
        {
          "item": {
            "index": "backpack",
            "name": "Backpack",
            "url": "/api/equipment/backpack"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "bedroll",
            "name": "Bedroll",
            "url": "/api/equipment/bedroll"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "clothes-costume",
            "name": "Clothes, costume",
            "url": "/api/equipment/clothes-costume"
          },
          "quantity": 2
        },
        {
          "item": {
            "index": "candle",
            "name": "Candle",
            "url": "/api/equipment/candle"
          },
          "quantity": 5
        },
        {
          "item": {
            "index": "rations-1-day",
            "name": "Rations (1 day)",
            "url": "/api/equipment/rations-1-day"
          },
          "quantity": 5
        },
        {
          "item": {
            "index": "waterskin",
            "name": "Waterskin",
            "url": "/api/equipment/waterskin"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "disguise-kit",
            "name": "Disguise Kit",
            "url": "/api/equipment/disguise-kit"
          },
          "quantity": 1
        }
      ],
      "url": "/api/equipment/entertainers-pack"
    },
    {
      "index": "explorers-pack",
      "name": "Explorer's Pack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "equipment-packs",
        "name": "Equipment Packs",
        "url": "/api/equipment-categories/equipment-packs"
      },
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "contents": [
        {
          "item": {
            "index": "backpack",
            "name": "Backpack",
            "url": "/api/equipment/backpack"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "bedroll",
            "name": "Bedroll",
            "url": "/api/equipment/bedroll"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "mess-kit",
            "name": "Mess Kit",
            "url": "/api/equipment/mess-kit"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "tinderbox",
            "name": "Tinderbox",
            "url": "/api/equipment/tinderbox"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "torch",
            "name": "Torch",
            "url": "/api/equipment/torch"
          },
          "quantity": 10
        },
        {
          "item": {
            "index": "rations-1-day",
            "name": "Rations (1 day)",
            "url": "/api/equipment/rations-1-day"
          },
          "quantity": 10
        },
        {
          "item": {
            "index": "waterskin",
            "name": "Waterskin",
            "url": "/api/equipment/waterskin"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "rope-hempen-50-feet",
            "name": "Rope, hempen (50 feet)",
            "url": "/api/equipment/rope-hempen-50-feet"
          },
          "quantity": 1
        }
      ],
      "url": "/api/equipment/explorers-pack"
    },
    {
      "index": "priests-pack",
      "name": "Priest's Pack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "equipment-packs",
        "name": "Equipment Packs",
        "url": "/api/equipment-categories/equipment-packs"
      },
      "cost": {
        "quantity": 19,
        "unit": "gp"
      },
      "contents": [
        {
          "item": {
            "index": "backpack",
            "name": "Backpack",
            "url": "/api/equipment/backpack"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "blanket",
            "name": "Blanket",
            "url": "/api/equipment/blanket"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "candle",
            "name": "Candle",
            "url": "/api/equipment/candle"
          },
          "quantity": 10
        },
        {
          "item": {
            "index": "tinderbox",
            "name": "Tinderbox",
            "url": "/api/equipment/tinderbox"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "rations-1-day",
            "name": "Rations (1 day)",
            "url": "/api/equipment/rations-1-day"
          },
          "quantity": 2
        },
        {
          "item": {
            "index": "waterskin",
            "name": "Waterskin",
            "url": "/api/equipment/waterskin"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "alms-box",
            "name": "Alms box",
            "url": "/api/equipment/alms-box"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "block-of-incense",
            "name": "Block of incense",
            "url": "/api/equipment/block-of-incense"
          },
          "quantity": 2
        },
        {
          "item": {
            "index": "censer",
            "name": "Censer",
            "url": "/api/equipment/censer"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "vestments",
            "name": "Vestments",
            "url": "/api/equipment/vestments"
          },
          "quantity": 1
        }
      ],
      "url": "/api/equipment/priests-pack"
    },
    {
      "index": "scholars-pack",
      "name": "Scholar's Pack",
      "equipment_category": {
        "index": "adventuring-gear",
        "name": "Adventuring Gear",
        "url": "/api/equipment-categories/adventuring-gear"
      },
      "gear_category": {
        "index": "equipment-packs",
        "name": "Equipment Packs",
        "url": "/api/equipment-categories/equipment-packs"
      },
      "cost": {
        "quantity": 40,
        "unit": "gp"
      },
      "contents": [
        {
          "item": {
            "index": "backpack",
            "name": "Backpack",
            "url": "/api/equipment/backpack"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "book",
            "name": "Book",
            "url": "/api/equipment/book"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "ink-1-ounce-bottle",
            "name": "Ink (1 ounce bottle)",
            "url": "/api/equipment/ink-1-ounce-bottle"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "ink-pen",
            "name": "Ink pen",
            "url": "/api/equipment/ink-pen"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "parchment-one-sheet",
            "name": "Parchment (one sheet)",
            "url": "/api/equipment/parchment-one-sheet"
          },
          "quantity": 10
        },
        {
          "item": {
            "index": "little-bag-of-sand",
            "name": "Little bag of sand",
            "url": "/api/equipment/little-bag-of-sand"
          },
          "quantity": 1
        },
        {
          "item": {
            "index": "small-knife",
            "name": "Small knife",
            "url": "/api/equipment/small-knife"
          },
          "quantity": 1
        }
      ],
      "url": "/api/equipment/scholars-pack"
    },
    {
      "index": "alchemists-supplies",
      "name": "Alchemist's Supplies",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "weight": 8,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/alchemists-supplies"
    },
    {
      "index": "brewers-supplies",
      "name": "Brewer's Supplies",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "weight": 9,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/brewers-supplies"
    },
    {
      "index": "calligraphers-supplies",
      "name": "Calligrapher's Supplies",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/calligraphers-supplies"
    },
    {
      "index": "carpenters-tools",
      "name": "Carpenter's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 8,
        "unit": "gp"
      },
      "weight": 6,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/carpenters-tools"
    },
    {
      "index": "cartographers-tools",
      "name": "Cartographer's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 15,
        "unit": "gp"
      },
      "weight": 6,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/cartographers-tools"
    },
    {
      "index": "cobblers-tools",
      "name": "Cobbler's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/cobblers-tools"
    },
    {
      "index": "cooks-utensils",
      "name": "Cook's utensils",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 8,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/cooks-utensils"
    },
    {
      "index": "glassblowers-tools",
      "name": "Glassblower's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 30,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/glassblowers-tools"
    },
    {
      "index": "jewelers-tools",
      "name": "Jeweler's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/jewelers-tools"
    },
    {
      "index": "leatherworkers-tools",
      "name": "Leatherworker's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/leatherworkers-tools"
    },
    {
      "index": "masons-tools",
      "name": "Mason's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 8,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/masons-tools"
    },
    {
      "index": "painters-supplies",
      "name": "Painter's Supplies",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/painters-supplies"
    },
    {
      "index": "potters-tools",
      "name": "Potter's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 3,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/potters-tools"
    },
    {
      "index": "smiths-tools",
      "name": "Smith's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "weight": 8,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/smiths-tools"
    },
    {
      "index": "tinkers-tools",
      "name": "Tinker's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "weight": 10,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/tinkers-tools"
    },
    {
      "index": "weavers-tools",
      "name": "Weaver's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/weavers-tools"
    },
    {
      "index": "woodcarvers-tools",
      "name": "Woodcarver's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Artisan's Tools",
      "cost": {
        "quantity": 1,
        "unit": "gp"
      },
      "weight": 5,
      "desc": [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency."
      ],
      "url": "/api/equipment/woodcarvers-tools"
    },
    {
      "index": "dice-set",
      "name": "Dice Set",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Gaming Sets",
      "cost": {
        "quantity": 1,
        "unit": "sp"
      },
      "weight": 0,
      "desc": [
        "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
      ],
      "url": "/api/equipment/dice-set"
    },
    {
      "index": "playing-card-set",
      "name": "Playing Card Set",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Gaming Sets",
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 0,
      "desc": [
        "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
      ],
      "url": "/api/equipment/playing-card-set"
    },
    {
      "index": "bagpipes",
      "name": "Bagpipes",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 30,
        "unit": "gp"
      },
      "weight": 6,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/bagpipes"
    },
    {
      "index": "drum",
      "name": "Drum",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 6,
        "unit": "gp"
      },
      "weight": 3,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/drum"
    },
    {
      "index": "dulcimer",
      "name": "Dulcimer",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 10,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/dulcimer"
    },
    {
      "index": "flute",
      "name": "Flute",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/flute"
    },
    {
      "index": "lute",
      "name": "Lute",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 35,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/lute"
    },
    {
      "index": "lyre",
      "name": "Lyre",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 30,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/lyre"
    },
    {
      "index": "horn",
      "name": "Horn",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 3,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/horn"
    },
    {
      "index": "pan-flute",
      "name": "Pan flute",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 12,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/pan-flute"
    },
    {
      "index": "shawm",
      "name": "Shawm",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/shawm"
    },
    {
      "index": "viol",
      "name": "Viol",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Musical Instrument",
      "cost": {
        "quantity": 30,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency."
      ],
      "url": "/api/equipment/viol"
    },
    {
      "index": "navigators-tools",
      "name": "Navigator's Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Other Tools",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 2,
      "desc": [
        "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea."
      ],
      "url": "/api/equipment/navigators-tools"
    },
    {
      "index": "thieves-tools",
      "name": "Thieves' Tools",
      "equipment_category": {
        "index": "tools",
        "name": "Tools",
        "url": "/api/equipment-categories/tools"
      },
      "tool_category": "Other Tools",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "weight": 1,
      "desc": [
        "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks."
      ],
      "url": "/api/equipment/thieves-tools"
    },
    {
      "index": "camel",
      "name": "Camel",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "speed": {
        "quantity": 50,
        "unit": "ft/round"
      },
      "capacity": "480 lb.",
      "url": "/api/equipment/camel"
    },
    {
      "index": "donkey",
      "name": "Donkey",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 8,
        "unit": "gp"
      },
      "speed": {
        "quantity": 40,
        "unit": "ft/round"
      },
      "capacity": "420 lb.",
      "url": "/api/equipment/donkey"
    },
    {
      "index": "mule",
      "name": "Mule",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 8,
        "unit": "gp"
      },
      "speed": {
        "quantity": 40,
        "unit": "ft/round"
      },
      "capacity": "420 lb.",
      "url": "/api/equipment/mule"
    },
    {
      "index": "elephant",
      "name": "Elephant",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 200,
        "unit": "gp"
      },
      "speed": {
        "quantity": 40,
        "unit": "ft/round"
      },
      "capacity": "1,320 lb.",
      "url": "/api/equipment/elephant"
    },
    {
      "index": "horse-draft",
      "name": "Horse, draft",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "speed": {
        "quantity": 40,
        "unit": "ft/round"
      },
      "capacity": "540 lb.",
      "url": "/api/equipment/horse-draft"
    },
    {
      "index": "horse-riding",
      "name": "Horse, riding",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 75,
        "unit": "gp"
      },
      "speed": {
        "quantity": 60,
        "unit": "ft/round"
      },
      "capacity": "480 lb.",
      "url": "/api/equipment/horse-riding"
    },
    {
      "index": "mastiff",
      "name": "Mastiff",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 25,
        "unit": "gp"
      },
      "speed": {
        "quantity": 40,
        "unit": "ft/round"
      },
      "capacity": "195 lb.",
      "url": "/api/equipment/mastiff"
    },
    {
      "index": "pony",
      "name": "Pony",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 30,
        "unit": "gp"
      },
      "speed": {
        "quantity": 40,
        "unit": "ft/round"
      },
      "capacity": "225 lb.",
      "url": "/api/equipment/pony"
    },
    {
      "index": "warhorse",
      "name": "Warhorse",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Mounts and Other Animals",
      "cost": {
        "quantity": 400,
        "unit": "gp"
      },
      "speed": {
        "quantity": 60,
        "unit": "ft/round"
      },
      "capacity": "540 lb.",
      "url": "/api/equipment/warhorse"
    },
    {
      "index": "barding-padded",
      "name": "Barding: Padded",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "weight": 16,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-padded"
    },
    {
      "index": "barding-leather",
      "name": "Barding: Leather",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 40,
        "unit": "gp"
      },
      "weight": 20,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-leather"
    },
    {
      "index": "barding-studded-leather",
      "name": "Barding: Studded Leather",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 180,
        "unit": "gp"
      },
      "weight": 26,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-studded-leather"
    },
    {
      "index": "barding-hide",
      "name": "Barding: Hide",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 40,
        "unit": "gp"
      },
      "weight": 24,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-hide"
    },
    {
      "index": "barding-chain-shirt",
      "name": "Barding: Chain shirt",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 200,
        "unit": "gp"
      },
      "weight": 40,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-chain-shirt"
    },
    {
      "index": "barding-scale-mail",
      "name": "Barding: Scale mail",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 200,
        "unit": "gp"
      },
      "weight": 90,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-scale-mail"
    },
    {
      "index": "barding-breastplate",
      "name": "Barding: Breastplate",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 1600,
        "unit": "gp"
      },
      "weight": 40,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-breastplate"
    },
    {
      "index": "barding-half-plate",
      "name": "Barding: Half plate",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 3000,
        "unit": "gp"
      },
      "weight": 80,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-half-plate"
    },
    {
      "index": "barding-ring-mail",
      "name": "Barding: Ring mail",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 12,
        "unit": "gp"
      },
      "weight": 80,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-ring-mail"
    },
    {
      "index": "barding-chain-mail",
      "name": "Barding: Chain mail",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 300,
        "unit": "gp"
      },
      "weight": 110,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-chain-mail"
    },
    {
      "index": "barding-splint",
      "name": "Barding: Splint",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 800,
        "unit": "gp"
      },
      "weight": 120,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-splint"
    },
    {
      "index": "barding-plate",
      "name": "Barding: Plate",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 6000,
        "unit": "gp"
      },
      "weight": 130,
      "desc": [
        "Barding is armor designed to protect an animal's head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much."
      ],
      "url": "/api/equipment/barding-plate"
    },
    {
      "index": "bit-and-bridle",
      "name": "Bit and bridle",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 2,
        "unit": "gp"
      },
      "weight": 1,
      "url": "/api/equipment/bit-and-bridle"
    },
    {
      "index": "carriage",
      "name": "Carriage",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 100,
        "unit": "gp"
      },
      "weight": 600,
      "url": "/api/equipment/carriage"
    },
    {
      "index": "cart",
      "name": "Cart",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 15,
        "unit": "gp"
      },
      "weight": 200,
      "url": "/api/equipment/cart"
    },
    {
      "index": "chariot",
      "name": "Chariot",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 250,
        "unit": "gp"
      },
      "weight": 100,
      "url": "/api/equipment/chariot"
    },
    {
      "index": "animal-feed-1-day",
      "name": "Animal Feed (1 day)",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 5,
        "unit": "cp"
      },
      "weight": 10,
      "url": "/api/equipment/animal-feed-1-day"
    },
    {
      "index": "saddle-exotic",
      "name": "Saddle, Exotic",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 60,
        "unit": "gp"
      },
      "weight": 50,
      "desc": [
        "An exotic saddle is required for riding any aquatic or flying mount."
      ],
      "url": "/api/equipment/saddle-exotic"
    },
    {
      "index": "saddle-military",
      "name": "Saddle, Military",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "weight": 30,
      "desc": [
        "A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted."
      ],
      "url": "/api/equipment/saddle-military"
    },
    {
      "index": "saddle-pack",
      "name": "Saddle, Pack",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 5,
        "unit": "gp"
      },
      "weight": 15,
      "url": "/api/equipment/saddle-pack"
    },
    {
      "index": "saddle-riding",
      "name": "Saddle, Riding",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 10,
        "unit": "gp"
      },
      "weight": 25,
      "url": "/api/equipment/saddle-riding"
    },
    {
      "index": "saddlebags",
      "name": "Saddlebags",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 4,
        "unit": "gp"
      },
      "weight": 8,
      "url": "/api/equipment/saddlebags"
    },
    {
      "index": "sled",
      "name": "Sled",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 20,
        "unit": "gp"
      },
      "weight": 300,
      "url": "/api/equipment/sled"
    },
    {
      "index": "stabling-1-day",
      "name": "Stabling (1 day)",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 5,
        "unit": "sp"
      },
      "weight": 0,
      "url": "/api/equipment/stabling-1-day"
    },
    {
      "index": "wagon",
      "name": "Wagon",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Tack, Harness, and Drawn Vehicles",
      "cost": {
        "quantity": 35,
        "unit": "gp"
      },
      "weight": 400,
      "url": "/api/equipment/wagon"
    },
    {
      "index": "galley",
      "name": "Galley",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Waterborne Vehicles",
      "cost": {
        "quantity": 30000,
        "unit": "gp"
      },
      "speed": {
        "quantity": 4,
        "unit": "mph"
      },
      "url": "/api/equipment/galley"
    },
    {
      "index": "keelboat",
      "name": "Keelboat",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Waterborne Vehicles",
      "cost": {
        "quantity": 3000,
        "unit": "gp"
      },
      "speed": {
        "quantity": 1,
        "unit": "mph"
      },
      "desc": [
        "Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land."
      ],
      "url": "/api/equipment/keelboat"
    },
    {
      "index": "longship",
      "name": "Longship",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Waterborne Vehicles",
      "cost": {
        "quantity": 10000,
        "unit": "gp"
      },
      "speed": {
        "quantity": 3,
        "unit": "mph"
      },
      "url": "/api/equipment/longship"
    },
    {
      "index": "rowboat",
      "name": "Rowboat",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Waterborne Vehicles",
      "cost": {
        "quantity": 50,
        "unit": "gp"
      },
      "speed": {
        "quantity": 1.5,
        "unit": "mph"
      },
      "desc": [
        "Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can't be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land."
      ],
      "url": "/api/equipment/rowboat"
    },
    {
      "index": "sailing-ship",
      "name": "Sailing ship",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Waterborne Vehicles",
      "cost": {
        "quantity": 10000,
        "unit": "gp"
      },
      "speed": {
        "quantity": 2,
        "unit": "mph"
      },
      "url": "/api/equipment/sailing-ship"
    },
    {
      "index": "warship",
      "name": "Warship",
      "equipment_category": {
        "index": "mounts-and-vehicles",
        "name": "Mounts and Vehicles",
        "url": "/api/equipment-categories/mounts-and-vehicles"
      },
      "vehicle_category": "Waterborne Vehicles",
      "cost": {
        "quantity": 25000,
        "unit": "gp"
      },
      "speed": {
        "quantity": 2.5,
        "unit": "mph"
      },
      "url": "/api/equipment/warship"
    }
  ]