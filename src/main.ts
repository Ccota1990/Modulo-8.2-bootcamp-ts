type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];


const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[] ): Pacientes[] => {
    const pacientesDePediatria = pacientes.filter (
      (paciente : Pacientes) => paciente.especialidad === "Pediatra"  
    )
    return pacientesDePediatria
  };

  console.log (obtenPacientesAsignadosAPediatria(pacientes));

  const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesDePediatriaMenoresDeDiez = pacientes.filter (
      (paciente : Pacientes)  => paciente.especialidad === "Pediatra" && paciente.edad < 10,
    )
    return pacientesDePediatriaMenoresDeDiez
  };

  console.log (obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

  const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo: boolean = false;
    activarProctolo = pacientes.some (
        (paciente : Pacientes) => paciente.frecuenciaCardiaca >100 && paciente.temperatura>39)

    return activarProctolo;
  };

  console.log(activarProtocoloUrgencia(pacientes));

  const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesReasignados: Pacientes[] = pacientes.map (
        (paciente : Pacientes): Pacientes => {
            if (paciente.especialidad === "Pediatra") {
                return {
                    ...paciente,
                    especialidad : "Medico de familia"
                }
            }
            return {
                ...paciente,
            }    
        });
    return pacientesReasignados
  };

  console.log(reasignaPacientesAMedicoFamilia(pacientes));

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let sePuedeIrACasa: boolean = true;
    sePuedeIrACasa = !pacientes.some (
        (paciente : Pacientes) => paciente.especialidad === "Pediatra")
    return sePuedeIrACasa
  };

  console.log (HayPacientesDePediatria(pacientes));


  const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    let totalPorEspecialidad : NumeroPacientesPorEspecialidad = {medicoDeFamilia : 0, pediatria : 0, cardiologia : 0 }
     pacientes.forEach (
        (paciente : Pacientes ) => {
            if (paciente.especialidad === "Medico de familia"){
                totalPorEspecialidad.medicoDeFamilia++ 
            }
            if (paciente.especialidad === "Pediatra"){
                totalPorEspecialidad.pediatria++
            }
            if (paciente.especialidad === "Cardiólogo"){
                totalPorEspecialidad.cardiologia++
            }
        }
    )
    return totalPorEspecialidad
  };

  console.log(cuentaPacientesPorEspecialidad(pacientes));


