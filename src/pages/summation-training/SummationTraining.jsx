import "./SummationTraining.css"
import Nav from "../../components/Nav/Nav"

function SummationTraining() {
  return (
    <div className="summation-training-container">
      <Nav exclude="إصدار موافقة علي تدريب خارجي" />
      <main className="main-container">
        <div className="main-right">
          <p>يرجى رفع ورقة طلب الموافقة على التدريب الصادرة من الشركة </p>
          <p>سيتم مراجعة الطلب وارسال الموافقة على حسابك الإلكتروني في خلال يوم الى ثلاثة أيام عمل</p>
        </div>
        <div className="main-left">
          <div className="input-place-holder"></div>
          <button>تقديم</button>
        </div>
      </main>
    </div>
  )
}

export default SummationTraining
