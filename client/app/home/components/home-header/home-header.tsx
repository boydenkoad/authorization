import Image from "next/image";
import classNames from "classnames";
import Avatar from "@/public/avatar.png";
import "./style.css";

interface HomeHeaderProps {
  title: string;
  description: string;
  avatar: string;
  className?: string;
}

export function HomeHeader({
  avatar,
  description,
  title,
  className,
}: HomeHeaderProps) {
  return (
    <div className={classNames(className, "home-header")}>
      <div className="container">
        <div className="home-header__content">
          <div className="home-header__column-left">
            <h2 className="home-header__column-left__element home-header__title">
              {title}
            </h2>
            <p className="home-header__column-left__element home-header__description">
              {description}
            </p>
            <button className="home-header__column-left__element home-header__button">
              Download Resume
            </button>
          </div>
          <div className="home-header__column-right">
            <Image src={Avatar} alt={avatar} width={243} height={243} />
          </div>
        </div>
      </div>
    </div>
  );
}
