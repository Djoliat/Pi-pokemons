const Validation = (forms)=>{
    let error = {}
    let weight = parseInt(forms.weight)
    let height = parseInt(forms.height)
    let speed = parseInt(forms.speed)
    let defense = parseInt(forms.defense)
    let attack = parseInt(forms.attack)
    let hp = parseInt(forms.hp)

    if(!forms.name){
        error.name = "Must send name"
    }else if(forms.weight && /^\d+$/.test(weight) !== true){
        error.weight = "Must be number >= 0"
    } else if(forms.hp && /^\d+$/.test(hp) !== true){
        error.hp = "Must be number >= 0"
    }else if(forms.height && /^\d+$/.test(height) !== true){
        error.height = "Must be number >= 0"
    }
    else if(forms.speed && /^\d+$/.test(speed) !== true){
        error.speed = "Must be number >= 0"
    }
    else if(forms.defense && /^\d+$/.test(defense) !== true){
        error.defense = "Must be number >= 0"
    }
    else if(forms.attack && /^\d+$/.test(attack) !== true){
        error.attack = "Must be number >= 0"
    }
    else if(!forms.types.length){
        error.types = "Must choose at least one type"
    } else if(forms.types.length > 2){
        error.types = "Only two types allowed"
    }

    return error
}

export default Validation