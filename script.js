const hp = document.getElementById("hp")
const df = document.getElementById("df")
const dfpercent = document.getElementById("dfpercent")
const damage = document.getElementById("damage")

const finaldamage = document.getElementById("finaldamage")
const multiplier = document.getElementById("multiplier")
const hits = document.getElementById("hits")
const ehp = document.getElementById("ehp")

function number(value) {
    return Number(value) || 0
}

function format(value) {
    if (!Number.isFinite(value)) {
        return "∞"
    }

    return value.toLocaleString("en-US", {
        maximumFractionDigits: 10
    })
}

function calculate() {
    const health = number(hp.value)
    const flat = number(df.value)
    const percent = number(dfpercent.value)
    const incoming = number(damage.value)

    const damageMultiplier = 1 - percent / 100
    const taken = (incoming - flat) * damageMultiplier

    let killHits = Infinity
    let effective = Infinity

    if (taken > 0 && health > 0 && incoming > 0) {
        killHits = Math.ceil(health / taken)
        effective = health * (incoming / taken)
    }

    finaldamage.textContent = format(taken)
    multiplier.textContent = format(damageMultiplier) + "x"
    hits.textContent = format(killHits)
    ehp.textContent = format(effective)
}

hp.addEventListener("input", calculate)
df.addEventListener("input", calculate)
dfpercent.addEventListener("input", calculate)
damage.addEventListener("input", calculate)

calculate()