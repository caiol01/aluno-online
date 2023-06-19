class Calculo {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2,
            0.4 * this.a1 + 0.6 * this.a3,
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
        if (this.mediaFinal() > 9.0) {
            return "SS – Superior";
        } else if (this.mediaFinal() > 7.0 && this.mediaFinal() < 8.9) {
            return "MS – Médio Superior"
        } else if (this.mediaFinal() > 5.0 && this.mediaFinal() < 6.9) {
            return "MM – Médio"
        } else if (this.mediaFinal() > 3.0 && this.mediaFinal() < 4.9) {
            return "MI – Médio Inferior"
        } else if (this.mediaFinal() > 0.1 && this.mediaFinal() < 2.9) {
            return "II – Inferior"
        } else {
            return "SR – Sem rendimento"
        }
    }
}

module.exports = Calculo;