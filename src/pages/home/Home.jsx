import "./Home.css"
import CertificateIcon from "../../assets/certificate-icon.svg"
import AdministrativeIcon from "../../assets/administrative-icon.svg"
import GetApprovalIcon from "../../assets/get-approval-icon.svg"
import TableIcon from "../../assets/table-icon.svg"
import StudentsUnionIcon from "../../assets/students-union-icon.svg"
import StatementsIcon from "../../assets/statement-icon.svg"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <div className="services-container">
        <h2>
          آهلا وسهلاً بكم
          <br />
          يرجى إختيار الخدمة المراد إتمامها
        </h2>
        <div className="services">
          <div className="service">
            <Link to='/SummationTraining'>
              <div className="service-icon">
                <img src={GetApprovalIcon} alt="GetApprovalIcon" />
              </div>
              <div className="service-title">إصدار موافقة على تدريب خارجي</div>
            </Link>
          </div>
          <div className="service">
            <Link to=''>
              <div className="service-icon">
                <img src={AdministrativeIcon} alt="AdministrativeIcon" />
              </div>
              <div className="service-title">
                تقييم الخدمات الإدراية بالكلية
              </div>
            </Link>
          </div>
          <div className="service">
            <Link to=''>
              <div className="service-icon">
                <img src={CertificateIcon} alt="CertificateIcon" />
              </div>
              <div className="service-title">
                إصدار شهادات
              </div>
            </Link>
          </div>
          <div className="service">
            <Link to=''>
              <div className="service-icon">
                <img src={StatementsIcon} alt="StatementsIcon" />
              </div>
              <div className="service-title">
                كشوفات السكاشن
                </div>
            </Link>
          </div>
          <div className="service">
            <Link to=''>
              <div className="service-icon">
                <img src={StudentsUnionIcon} alt="StudentsUnionIcon" />
              </div>
              <div className="service-title">إتحاد الطلاب</div>
            </Link>
          </div>
          <div className="service">
            <Link to=''>
              <div className="service-icon">
                <img src={TableIcon} alt="TableIcon" />
              </div>
              <div className="service-title">الجداول</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="statistics-container">
        <div className="statistics-item">
          <div className="statistics-item-title">عدد الطلاب</div>
          <div className="statistics-item-value">2530</div>
        </div>
        <div className="statistics-item">
          <div className="statistics-item-title">عدد المدرسين</div>
          <div className="statistics-item-value">17</div>
        </div>
        <div className="statistics-item">
          <div className="statistics-item-title">عدد الخريجين</div>
          <div className="statistics-item-value">387</div>
        </div>
      </div>
    </div>
  )
}

export default Home
