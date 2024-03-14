console.log("inicializando archivo");

			const btnEmpezar = document.getElementById('btnEmpezar')
			const celeste = document.getElementById("celeste")
			const violeta = document.getElementById("violeta")
			const verde = document.getElementById("verde")
			const naranja = document.getElementById("naranja")
			const ULTIMO_NIVEL = 5;

			class Juego {
				constructor() {
					this.inicializar()
					this.generarSecuencia()
					setTimeout( () => this.siguienteNivel() , 1500 )
				}

				inicializar() {
					this.jugador = {
						nombre: "Mildred",
						apellido: "Guerra",
						nivel: "Junior"
					}
						this.siguienteNivel = this.siguienteNivel.bind(this);
						this.elegirColor = this.elegirColor.bind(this) //yjfddkhtde
						this.inicializar = this.inicializar.bind(this)
						this.nivel = 1;
						this.colores = {
							celeste,
							violeta,
							naranja,
							verde
						}
						btnEmpezar.classList.toggle('hide') //hfdxgd
					}

				generarSecuencia() {
					this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.round(Math.random() * 3 )) //ghsdgjs
				}

				siguienteNivel() {
					this.subnivel = 0;
					this.iluminarSecuencia()
					this.agregarEventosClick()
				}

				transformarNumeroAColor(numero) {
					switch (numero) {
						case 0:
							return "celeste";
						case 1:
							return "violeta";
						case 2: 
							return "naranja";
						case 3:
							return "verde";
						}
				}

				transformarColorANumero(color) {
					switch (color) {
						case "celeste":
							return 0;
						case "violeta":
							return 1;
						case "naranja": 
							return 2;
						case "verde":
							return 3;
						}
				}

				iluminarSecuencia() {		
					for (let i =0; i < this.nivel ; i++) {
						const color = this.transformarNumeroAColor(this.secuencia[i])
						setTimeout( () => this.iluminarColor(color) , 1000 * i)
					}
				}

				iluminarColor(color) {
					this.colores[color].classList.add("light")
					setTimeout(() => this.apagarColor(color), 350)
				}

				apagarColor(color) {
					this.colores[color].classList.remove("light")

				}

				agregarEventosClick() {
					this.colores.celeste.addEventListener("click", this.elegirColor ) //jdh,gd
					this.colores.violeta.addEventListener("click", this.elegirColor )
					this.colores.naranja.addEventListener("click", this.elegirColor )
					this.colores.verde.addEventListener("click", this.elegirColor )
					}

				removerEventosClick() {
					this.colores.celeste.removeEventListener("click", this.elegirColor ) //hktkdhfd
					this.colores.violeta.removeEventListener("click", this.elegirColor )
					this.colores.naranja.removeEventListener("click", this.elegirColor )
					this.colores.verde.removeEventListener("click", this.elegirColor )
					}

					elegirColor(ev) {
						const nombreColor = ev.target.dataset.color //jyhfj,ldhg,d
						const numeroColor = this.transformarColorANumero(nombreColor)
						this.iluminarColor(nombreColor);
						let turno = this.subnivel + 1
							if (numeroColor === this.secuencia[this.subnivel] ) {
								this.subnivel++;
								if (turno === this.nivel ) {		
									this.nivel++	
									this.removerEventosClick()
									if (this.nivel === (ULTIMO_NIVEL + 1) ) { //&dfjyrhde
										this.ganoElJuego()
									}
									else {
									setTimeout( this.siguienteNivel , 3000 )
									this.pasasteDeNivel()
									}
								}
								console.log("sigue jugando")
							}
							else {
							this.perdioElJuego()
							}
					}

					pasasteDeNivel() {
						swal(` Pasaste de Nivel, genial`, `Ahora da lo mejor de ti, en el nivel ${this.nivel}`, "success") //hgdhm
					}

					ganoElJuego() {
					swal(`¡Felicitaciones!`, ` Ganaste el juego`, "success")
					.then( () => { //jhfj,gfd
							this.inicializar()
						})
					}

					perdioElJuego() {
					swal(`Te equivocaste`, `Presta más atención`, "error")
					.then(	() => { //hkgdhkfsd
							this.removerEventosClick()

							this.inicializar()
						}
						)
					}
			}

      function empezarJuego() {
       window.primerJuego = new Juego()  //jfdkg
      }

let temaClase = "Simon Dice";
let titulo = document.getElementById("title")

titulo.innerHTML=  temaClase;

