import Layout from "~/components/Layout"
import s from "~/styles/nosotros.module.css"
import Image from "next/image"
const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      description={"Quienes somos? Qué hacemos? que cursos hay?"}
    >
      <main className="container">
        <h1 className="heading">Nosotros</h1>
        <div className={s.contenido}>
          <Image
            src="/img/nosotros.png"
            width="600"
            height="600"
            alt="Nosotros"
            priority
          />
          <div className={s.descripcion}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              efficitur ultricies dolor, non placerat mauris auctor ut. Maecenas
              et lacus et ligula vehicula egestas et eu purus. Curabitur nibh
              magna, bibendum quis dolor vitae, rutrum porttitor lectus. Sed sit
              amet lorem vitae lacus fermentum luctus vitae quis mi. Morbi
              aliquam purus libero, id venenatis quam faucibus quis. Maecenas
              finibus convallis feugiat. Ut augue lacus, blandit tristique
              sapien convallis, facilisis lacinia dolor. In orci tellus, blandit
              eu ligula eget, malesuada blandit lorem. Aliquam erat volutpat.
            </p>
            <p>
              Sed suscipit quam sit amet tellus molestie vestibulum sit amet id
              nulla. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Etiam arcu mauris, ultricies non
              ipsum eget, venenatis tristique tellus. Morbi dignissim purus
              justo, non finibus est elementum id. Fusce ut tempor mauris.
              Aenean eu mi a ante ultricies lobortis quis in sapien. Donec
              scelerisque eget velit a commodo. Etiam faucibus mauris turpis,
              quis ullamcorper leo rutrum quis. Sed ultrices varius risus, vel
              lacinia velit tempor iaculis. In hac habitasse platea dictumst.
              Maecenas mi lorem, suscipit vitae nisl in, elementum volutpat
              nisl. Vestibulum nec augue venenatis, posuere lacus id, hendrerit
              sapien. In fringilla eros mattis erat sodales varius. Nulla non
              quam eleifend, venenatis dui vitae, laoreet nisl. Sed iaculis
              blandit turpis, sit amet elementum urna auctor pretium.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
