import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold leading-[1.06] tracking-tighter text-blue-600 sm:text-7xl">
            S.A.M - Hành trình an tâm và tin cậy vào sản phẩm hữu cơ.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              S.A.M - Đối tác uy tín trong sản phẩm hữu cơ. Cam kết chất lượng
              từ nguồn gốc đến tay người tiêu dùng. Sử dụng công nghệ tiên tiến
              và quy trình sản xuất hiện đại. Tầm nhìn tiên phong về sức khỏe và
              môi trường. Đồng hành cùng cộng đồng hướng tới một tương lai bền
              vững hơn.
            </p>
          </div>
          {/* <Button href="#" className="mt-10 w-full sm:hidden">
            Click vào đây để đến gian hàng của chún
          </Button> */}
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Sản phẩm', '+1000'],
              ['Vị trí', 'Hà Nội'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
