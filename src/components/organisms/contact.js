import { Card, Button, Input} from "../index"

export default function Contact() {
    return (
      <section id="contact">
        <Card className="flex gap-10 sm:p-16 p-10 flex-col lg:flex-row">
          <div className="flex-1 text-center">
            <h2 className="md:text-[45px] text-[30px] font-semibold leading-none sm:mb-0 mb-4">Dodatkowe pytania?</h2>
            <h3 className="text-secondaryText md:text-[18px] text-[16px] font-regular">Zostaw swój adres e-mail a odezwiemy się do Ciebie</h3>
          </div>
          <div className="flex-1 flex-center flex-col lg:flex-row gap-7">
            <div className="flex-1">
              <Input 
                type={"email"} 
                forName={"email"} 
                labelName={"Adres email"}
                placeholderName={"Adres e-mail"}
                name={"email"}
                isRequired={true}
                formId={"contact"}
                />
            </div>
            <div className="w-[150px]">
              <Button text={"Wyślij"} variation={1} />
            </div>
          </div>
        </Card>
      </section>
    )
  }