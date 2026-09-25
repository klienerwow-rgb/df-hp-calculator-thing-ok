function calculate() {
    var hp = Number(document.getElementById("hp").value)
    var df = Number(document.getElementById("df").value)
    var dfp = Number(document.getElementById("dfp").value)
    var damage = Number(document.getElementById("damage").value)

    var dmg2 = damage - df
    var dmg3 = dmg2 - (dmg2 * dfp / 100)
    dmg3 = Math.max(dmg3, 0)

    var ehpDamageMultiplier = 1 - dfp / 100

    var hits = Infinity
    var ehp = Infinity

    if (damage > 0 && hp > 0 && dmg3 > 0) {
        hits = Math.ceil(hp / dmg3)
    }

    if (hp > 0 && ehpDamageMultiplier > 0) {
        ehp = hp / ehpDamageMultiplier
    }

    document.getElementById("output").innerHTML =
        "Damage Taken: " + format(dmg3) + "<br>" +
        "Damage After DF: " + format(dmg2) + "<br>" +
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