```javascript
const hpInput = document.getElementById("hp")
const dfInput = document.getElementById("df")
const dfPercentInput = document.getElementById("dfPercent")
const damageInput = document.getElementById("damage")

const finalDamageOutput = document.getElementById("finalDamage")
const damageMultiplierOutput = document.getElementById("damageMultiplier")
const hitsToKillOutput = document.getElementById("hitsToKill")
const effectiveHpOutput = document.getElementById("effectiveHp")

function formatNumber(value) {
    if (!Number.isFinite(value)) {
        return value > 0 ? "∞" : "-∞"
    }

    return value.toLocaleString("en-US", {
        maximumFractionDigits: 10
    })
}

function calculate() {
    const hp = Number(hpInput.value)
    const df = Number(dfInput.value)
    const dfPercent = Number(dfPercentInput.value)
    const damage = Number(damageInput.value)

    if (![hp, df, dfPercent, damage].every(Number.isFinite)) {
        return
    }

    const damageMultiplier = 1 - dfPercent / 100
    const finalDamage = (damage - df) * damageMultiplier

    let hitsToKill = 0
    let effectiveHp = 0

    if (finalDamage > 0 && hp > 0) {
        hitsToKill = Math.ceil(hp / finalDamage)
        effectiveHp = hp / (finalDamage / damage)
    } else if (finalDamage === 0) {
        hitsToKill = Infinity
        effectiveHp = Infinity
    } else {
        hitsToKill = Infinity
        effectiveHp = Infinity
    }

    finalDamageOutput.textContent = formatNumber(finalDamage)
    damageMultiplierOutput.textContent = formatNumber(damageMultiplier) + "x"
    hitsToKillOutput.textContent = formatNumber(hitsToKill)
    effectiveHpOutput.textContent = formatNumber(effectiveHp)
}

document.getElementById("calculate").addEventListener("click", calculate)

hpInput.addEventListener("input", calculate)
dfInput.addEventListener("input", calculate)
dfPercentInput.addEventListener("input", calculate)
damageInput.addEventListener("input", calculate)

calculate()
```
