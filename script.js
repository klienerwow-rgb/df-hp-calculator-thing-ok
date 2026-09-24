function calculate() {
    var hp = Number(document.getElementById("hp").value)
    var df = Number(document.getElementById("df").value)
    var dfp = Number(document.getElementById("dfp").value)
    var damage = Number(document.getElementById("damage").value)

    var multiplier = 1 - dfp / 100
    var taken = (damage - df) * multiplier

    var hits = Infinity
    var ehp = Infinity

    if (damage > 0 && hp > 0 && taken > 0) {
        hits = Math.ceil(hp / taken)
        ehp = hp * damage / taken
    }

    document.getElementById("output").innerHTML =
        "Damage Taken: " + format(taken) + "<br>" +
        "Damage Multiplier: " + format(multiplier) + "x<br>" +
        "Hits To Kill: " + format(hits) + "<br>" +
        "Effective HP: " + format(ehp)
}

function format(value) {
    if (!Number.isFinite(value)) {
        return "∞"
    }

    return value.toLocaleString("en-US", {
        maximumFractionDigits: 10
    })
}

document.getElementById("hp").addEventListener("input", calculate)
document.getElementById("df").addEventListener("input", calculate)
document.getElementById("dfp").addEventListener("input", calculate)
document.getElementById("damage").addEventListener("input", calculate)

calculate()