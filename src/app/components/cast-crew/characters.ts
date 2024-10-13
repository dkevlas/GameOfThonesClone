export interface Character{
    img: string,
    name: string,
    description: string,
    bgCharacter: string,
    alt: string
}

export const characters: Character[] = [
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Jaime-Lannister-Profile.png',
        name: 'Jaime Lannister',
        description: 'Conocido como el "Matarreyes" por asesinar al rey al que servía, Jaime comienza como un hombre arrogante. Sin embargo, su redención y su relación con Brienne de Tarth lo muestran como un hombre más complejo y honorable.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Jaime-Lannister.png',
        alt: 'Jaime Lannister'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Tyrion-Lannister-Profile.png',
        name: 'Tyrion Lannister',
        description: 'El inteligente y sarcástico enano de la Casa Lannister, Tyrion es subestimado por su familia. A lo largo de la serie, demuestra ser uno de los estrategas más brillantes, navegando la política y las intrigas de Westeros.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Tyrion-Lannister.png',
        alt: 'Tyrion Lannister'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Cersei-Lannister-Profile.png',
        name: 'Cersei Lannister',
        description: 'Ambiciosa y despiadada, Cersei busca consolidar el poder de los Lannister y proteger a sus hijos a toda costa. A lo largo de la serie, se enfrenta a sus enemigos con crueldad y astucia, pero su obsesión con el poder la lleva a su caída.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Cersei-Lannister.png',
        alt: 'Cersei Lannister'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Daenerys-Targaryen-Profile.png',
        name: 'Daenerys Targaryen',
        description: 'La última de la Casa Targaryen, Daenerys pasa de ser una joven oprimida a una poderosa reina, conocida por liberar esclavos y gobernar con dragones. Su lucha por recuperar el Trono de Hierro la transforma a lo largo de la serie.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Daenerys-Targaryen.png',
        alt: 'Daenerys Targaryen'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Jon-Snow-Profile.png',
        name: 'Jon Snow',
        description: 'Hijo bastardo de Eddard Stark, Jon comienza su historia en la Guardia de la Noche, buscando su lugar en el mundo. A lo largo de la serie, descubre secretos sobre su verdadero linaje y se convierte en un líder clave en la lucha contra el mal.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Jon-Snow.png',
        alt: 'Jon Snow'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Sansa-Stark-Profile.png',
        name: 'Sansa Stark',
        description: 'Al principio una joven ingenua y soñadora, Sansa sufre traiciones y abusos, pero aprende a jugar el juego político. Eventualmente, emerge como una líder astuta y la clave en la reconstrucción del Norte.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Sansa-Stark.png',
        alt: 'Sansa Stark'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Khal-Drogo-Profile.png',
        name: 'Khal Drogo',
        description: 'Líder de los Dothraki y esposo de Daenerys, Khal Drogo es un guerrero brutal y temido. Aunque comienza como un personaje imponente, su amor por Daenerys muestra su lado más suave, antes de su trágica muerte.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Khal-Drogo.png',
        alt: 'Khal Drogo'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Bran-Stark-Profile.png',
        name: 'Bran Stark',
        description: 'Al principio de la serie, Bran es un niño aventurero que queda paralizado tras un accidente. A medida que descubre sus habilidades como el Cuervo de Tres Ojos, su rol evoluciona hacia el de una figura mística con poderes sobre el tiempo y la memoria.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Bran-Stark.png',
        alt: 'Bran Stark'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Arya-Stark-Profile.png',
        name: 'Arya Stark',
        description: 'La hija menor de los Stark, Arya rechaza las normas tradicionales para las mujeres nobles y se embarca en un viaje de venganza y autodescubrimiento. Entrenada como una asesina mortal, se convierte en una fuerza imparable.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Arya-Stark.png',
        alt: 'Arya Stark'
    },
    {
        img: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Eddard-Stark-Profile.png',
        name: 'Eddard (Ned) Stark',
        description: 'El honorable líder de la Casa Stark y Guardián del Norte, Ned se rige por su sentido del deber y la justicia. Su incapacidad para jugar el juego de poder en Desembarco del Rey lo lleva a su trágica muerte, que desencadena los eventos posteriores de la serie.',
        bgCharacter: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/got/cast-and-crew/Eddard-Stark.png',
        alt: 'Eddard (Ned) Stark'
    },
    // {
    //     img: '',
    //     name: 'Theon Greyjoy',
    //     description: 'Criado como pupilo de los Stark, Theon lucha con su identidad entre los Stark y su propia familia Greyjoy. Después de traicionar a los Stark, su arco gira en torno a su doloroso viaje hacia la redención.',
    //     bgCharacter: '',
    //     alt: ''
    // },
    // {
    //     img: '',
    //     name: 'Jorah Mormont',
    //     description: 'Exiliado de Westeros, Jorah se convierte en el consejero más leal de Daenerys. Aunque está enamorado de ella, su devoción a su causa lo define, incluso en su sacrificio final.',
    //     bgCharacter: '',
    //     alt: ''
    // },
    // {
    //     img: '',
    //     name: 'Sandor Clegane (El Perro)',
    //     description: 'Un guerrero brutal con una cicatriz física y emocional, Sandor es conocido por su desprecio por la caballería y la moralidad. A lo largo de la serie, su desarrollo lo convierte en un antihéroe con un código moral propio.',
    //     bgCharacter: '',
    //     alt: ''
    // },
    // {
    //     img: '',
    //     name: ' Brienne de Tarth',
    //     description: 'Fuerte, honorable y leal, Brienne es una de las pocas mujeres caballeras de Westeros. Su devoción por proteger a los Stark y su relación con Jaime Lannister la convierten en un personaje fundamental en la serie.',
    //     bgCharacter: '',
    //     alt: ''
    // },
    // {
    //     img: '',
    //     name: ' Samwell Tarly',
    //     description: 'Miembro de la Guardia de la Noche y mejor amigo de Jon Snow, Sam es un hombre tímido y con sobrepeso que se convierte en un estudioso clave para la derrota de los Caminantes Blancos, demostrando que el conocimiento es tan valioso como la espada.',
    //     bgCharacter: '',
    //     alt: ''
    // },
]