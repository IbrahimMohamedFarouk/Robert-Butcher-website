
const Card = ({title,subTitle,image,link}) => {
  return (
    <a href={link} className="block max-w-[250px] rounded-lg m-4 overflow-hidden">
        <div className="relative">
            <img src={image} className="w-full" alt={title} />
            <div className="flex text-center  justify-between flex-col">
                <h1 className="font-semibold text-xl">{title}</h1>
                <p className="font-medium text-md text-md">{subTitle}</p>
            </div>
        </div>
    </a>
  )
}

export default Card