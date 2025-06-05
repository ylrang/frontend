import axios from "axios";

export const BrncCan = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">캐나다 원자력 관련 법령 체계도</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/brnc/can_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>캐나다의 규제기관인 CNSC의 규제 철학은 인허가 소지자가 보건, 안전, 보안 및 환경을 보호하는 방식으로 규제 활동을 직접 관리할 책임이 있으며,
                이는 원자력의 평화적 사용에 대한 캐나다의 국내외 의무를 준수한다는 사실에 기초하고 있다. 또한, CNSC는 의회와 캐나다인들에게 이러한 책임이 적절히 이행되도록 보장할 책임이 있다.
                다음은 캐나다의 폐쇄 전 시설에서 SNF 관리와 관련된 추가 규제 문서를 제공한다.
                처분과 관련된 요건은 심층 처분 저장부지 특성화에 대한 지침 (REGDOC-1.2.1), 방사성폐기물 관리, 제3권: 방사성폐기물 처리를 위한 안전사례 (REGDOC-2.11.1) 등이 있다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">캐나다 심층처분 관련 주요 규제요건</h5>
        <table class="table table-bordered mb-0" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th class="bg-light" style={{ width: "10%" }}>분류</th>
              <th class="bg-light" style={{ width: "40%" }}>명칭</th>
              <th class="bg-light" style={{ width: "50%" }}>주요내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>법</td>
              <td>원자력 안전 및 관리법</td>
              <td>원자력 안전 및 관리에 관한 기본법</td>
            </tr>
            <tr>
              <td>핵연료폐기물법</td>
              <td>핵연료 폐기물과 관련된 기본법</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>규정</td>
              <td>규제 원칙</td>
              <td>규제와 관련된 기본 원칙</td>
            </tr>
            <tr>
              <td>캐나다 방사성폐기물 관리 및 해체를 위한 지침</td>
              <td>방사성폐기물 관리 및 해체에 대한 지침</td>
            </tr>
            <tr>
              <td class="text-center" style={{ width: "10%" }}>규제문서</td>
              <td>심지층처분시설 부지특성평가에 대한 지침</td>
              <td>심지층처분시설 부지의 특성평가에 대하 지침</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">캐나다 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>캐나다는 원전에서 발생하는 사용후핵연료를 각 원전에 습식 및 건식 저장 중</li>
          <li>Manitoba 지역의 Whiteshell 연구소 인근에 지하연구시설(URL) 운영하여 사용후핵연료의 심지층처분시 거동 및 수리지질학적 연구를 수행하였으며 2015년 폐쇄</li>
          <li>심층처분시설은 현재 부지선정 단계에 있으며, 심층처분시설에 대한 과거 이력 및 향후 계획은 다음과 같음</li>
          <li>2010년, 부지선정절차 착수</li>
          <li>2023년, 부지선정 (예정)</li>
          <li>2032년, 심층처분시설 건설 인·허가 (예정)</li>
          <li>2033년, 심층처분시설 착공 (예정)</li>
          <li>2043년, 심층처분시설 운영 (예정)</li>
        </ul>
        <div class="text-center mt-4">
          <img src="assets/images/brnc/can_site.png" alt="Image" class="laws" />
        </div>
      </div>
    </div>
  )
}
