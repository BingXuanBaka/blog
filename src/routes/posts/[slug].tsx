import { useParams } from "solid-start";
import { HeadingTitle } from "~/components/HeadingTitle";

export default function Post() {
  const params = useParams();

  const title = "主标题 1"
  const dateString = "2000/01/01 00:01"
  const category = "默认分类"

  return (
    <main class="gap-6 flex flex-col">
      <HeadingTitle title={title} />
      <div class="opacity-60 text-ellipsis overflow-hidden gap-4 flex">
        <span>{dateString}</span>
        <span>{category}</span>
      </div>
      <article class="flex gap-3 flex-col">
        <h1 class="text-5xl font-medium">
          h1
        </h1>
        <h2 class="text-4xl font-medium">
          h2
        </h2>
        <h3 class="text-3xl font-medium">
          h3
        </h3>
        <h4 class="text-2xl font-medium">
          h4
        </h4>
        <h5 class="text-xl font-medium">
          h5
        </h5>
        <h6 class="text-lg font-medium">
          h6
        </h6>
        <p>鉴于对人类家庭所有成员的固有尊严及其平等的和不移的权利的承认,乃是世界自由、正义与和平的基础, 鉴于对人权的无视和侮蔑已发展为野蛮暴行,这些暴行玷污了人类的良心,而一个人人享有言论和信仰自由并免予恐惧和匮乏的世界的来临,已被宣布为普通人民的最高愿望, 鉴于为使人类不致迫不得已铤而走险对暴政和压迫进行反叛,有必要使人权受法治的保护, 鉴于有必要促进各国间友好关系的发展, 鉴于各联合国国家的人民已在联合国宪章中重申他们对基本人权、人格尊严和价值以及男女平等权利的信念,并决心促成较大自由中的社会进步和生活水平的改善, 鉴于各会员国业已誓愿同联合国合作以促进对人权和基本自由的普遍尊重和遵行, 鉴于对这些权利和自由的普遍了解对于这个誓愿的充分实现具有很大的重要性, 因此现在,大会,发布这一世界人权宣言,作为所有人民和所有国家努力实现的共同标准,以期每一个人和社会机构经常铭念本宣言,努力通过教诲和教育促进对权利和自由的尊重,并通过国家的和国际的渐进措施,使这些权利和自由在各会员国本身人民及在其管辖下领土的人民中得到普遍和有效的承认和遵行; 人人生而自由,在尊严和权利上一律平等。他们赋有理性和良心,并应以兄弟关系的精神相对待。 人人有资格享有本宣言所载的一切权利和自由,不分种族、肤色、性别、语言、宗教、政治或其他见解、国籍或社会出身、财产、出生或其他身分等任何区别。 并且不得因一人所属的国家或领土的政治的、行政的或者国际的地位之不同而有所区别,无论该领土是独立领土、托管领土、非自治领土或者处于其他任何主权受限制的情况之下。</p>
      </article>
    </main>
  );
}