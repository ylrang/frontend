import axios from "axios";

export const BrncJpn = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">일본 원자력 관련 법령 체계도</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/brnc/jpn_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>일본의 원자력안전 관련 법령은 법, 시행령, 시행규칙 등으로 구성되어 있다.
                일본은 후쿠시마 원전사고 이후 원자력안전위원회 (NSC) 원자력안전보안원 (NISA), 원자력안전기반기구 (JNES)를 모두 폐지하고,
                원자력안전위원회 (NSC)를 설립 및 운영하고 있다.
                또한, 사고 발생시 신속한 대응을 위한 목적으로 원자력규제청 (Agency for Nuclear Regulation)을 설립 및 운영하고 있다.
                일본은 특정방사성폐기물 최종 처분에 관한 법률, 동법 시행령, 동법 시행규칙 등을 통해 방사성폐기물의 처분과 관련된 안전규제요건을 규정하고 있다.
                일본의 안전규제요건 문서 중 심층처분시스템에 대해서만 별도로 다루는 것은 현재는 없는 것으로 판단되며, 관련 법으로는 ｢특정방사성폐기물 최종 처분에 관한 법률｣ 및 동법 시행령과 시행규칙이 있다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">일본 심층처분 관련 주요 규제요건</h5>
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
              <td class="text-center" rowspan="4" style={{ width: "10%" }}>법</td>
              <td>원자력기본법</td>
              <td>
                <li>일본에서 원자력에 관해 처음으로 제정된 법률</li>
                <li>원자력 이용과 관련된 모든 사항에 포괄적으로 적용되는 원칙 규정</li>
              </td>
            </tr>
            <tr>
              <td>핵원료물질, 핵연료물질 및 원자로 규제에 관한 법률</td>
              <td>원자로 설치 및 운영 뿐만 아니라 핵물질의 성형, 가공, 저장, 재처리, 방폐물 처분사업에 관한 규제요건 </td>
            </tr>
            <tr>
              <td>방사성동위원소 등에 관한 방사선장해의 방지에 관한 법률</td>
              <td>방사선 이용으로 인한 영향으로부터 인간 및 환경을 보호하기 위한 규제요건</td>
            </tr>
            <tr>
              <td>핵연료폐기물법</td>
              <td rowspan="3">사용후핵연료 및 방폐물의 처분과 관계된 규제요건</td>
            </tr>
            <tr>
              <td class="text-center" style={{ width: "10%" }}>시행령</td>
              <td>특정방사성폐기물의 최종 처분에 관한 법률</td>
            </tr>
            <tr>
              <td class="text-center" style={{ width: "10%" }}>시행규칙</td>
              <td>특정방사성폐기물의 최종 처분에 관한 법률 시행규칙</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">일본 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>일본은 대부분의 사용후핵연료를 부지 내 습식저장하고, 일부 사용후핵연료는 롯카쇼 재처리공장 습식저장하고 있음.
            또한, 아오모리현 무쓰시에 건식 중간저장시설을 건설 중. 일본은 사용후핵연료를 재처리하는 정책을 원칙으로 하고 있으므로,
            사용후핵연료의 처분은 예정되어 있지 않으며, 재처리 후 발생하는 고준위폐기물의 심층처분은 이뤄질 예정임 </li>
          <li>미즈나미 지하연구시설 (Mizunami URL) 운영 중</li>
          <li>2020년 10월, 고준위방폐물 및 지층처분대상 저준위방폐물 처분시설에 대한 부지조사 신청 완료</li>
          <li>부지조사신청 지역 : 훗카이도의 슷쓰정(寿都町) 및 가모에나이촌(神恵内村)</li>
        </ul>
      </div>
    </div>
  )
}
