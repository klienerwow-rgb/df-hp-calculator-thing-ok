function calculate() {
    var hp = Number(document.getElementById("hp").value)
    var df = Number(document.getElementById("df").value)
    var dfp = Number(document.getElementById("dfp").value)
    var damage = Number(document.getElementById("damage").value)

    var multiplier = 1 - dfp / 100
    var taken = (damage - df) * multiplier

    var hits = Infinity
    var ehp = Infinity

    if (taken > 0 && damage > 0 && hp > 0) {
        hits = Math.ceil(hp / taken)
        ehp = hp / (taken / damage)
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