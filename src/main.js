const icons = {
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  upload: '<svg viewBox="0 0 24 24"><path d="M12 16V4m0 0 4 4m-4-4-4 4"/><path d="M20 16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"/></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  brain: '<svg viewBox="0 0 24 24"><path d="M9 3a3 3 0 0 0-3 3v1a4 4 0 0 0-2 7.5V16a3 3 0 0 0 3 3h1"/><path d="M15 3a3 3 0 0 1 3 3v1a4 4 0 0 1 2 7.5V16a3 3 0 0 1-3 3h-1"/><path d="M9 3v18M15 3v18M9 8h2M13 8h2M9 14h2M13 14h2"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>',
  export: '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>'
};

const tasks = [
  ['生产运行岗后备人才匹配分析', '生产运行岗', '128', '王梅', '2026-06-08 14:30', '待确认', '部分确认'],
  ['检修班组长岗位匹配分析', '检修班组长', '64', '李华', '2026-06-07 10:12', '已完成', '已确认'],
  ['安全管理专员岗位适配评估', '安全管理专员', '42', '张明', '2026-06-06 16:45', '分析中', '未确认'],
  ['设备点检岗转岗匹配分析', '设备点检岗', '89', '赵倩', '2026-06-05 09:20', '草稿', '未确认']
];

const employees = [
  {rank:1,name:'周启明',dept:'生产运行部',role:'主值班员',level:'P6',years:8,score:91,grade:'高匹配',risk:'低风险',confirm:'已确认',adv:'设备运行经验完整；绩效稳定',gap:'班组管理跨度需扩大'},
  {rank:2,name:'陈思远',dept:'检修中心',role:'检修技术员',level:'P5',years:6,score:86,grade:'高匹配',risk:'低风险',confirm:'未确认',adv:'故障处理案例丰富；证书齐全',gap:'跨班组协同经验一般'},
  {rank:3,name:'刘雨',dept:'生产运行部',role:'巡检员',level:'P4',years:4,score:78,grade:'中匹配',risk:'中风险',confirm:'已调整',adv:'安全培训完成率高',gap:'应急处置经验不足；管理经验不足'},
  {rank:4,name:'黄晨',dept:'设备管理部',role:'设备管理员',level:'P5',years:5,score:72,grade:'中匹配',risk:'中风险',confirm:'未确认',adv:'设备台账与制度熟悉',gap:'现场运行经历偏少'},
  {rank:5,name:'宋洁',dept:'综合管理部',role:'培训专员',level:'P4',years:3,score:64,grade:'低匹配',risk:'高风险',confirm:'未确认',adv:'培训组织经验较好',gap:'专业运行能力与证书缺口明显'}
];

function icon(name){ return `<span class="icon">${icons[name]}</span>`; }
function badge(text, tone='primary') { return `<span class="badge ${tone}"><i></i>${text}</span>`; }
function card(title, value, meta, iconName='chart') { return `<div class="metric"><div><p>${title}</p><strong>${value}</strong><small>${meta}</small></div>${icon(iconName)}</div>`; }
function section(title, sub, iconName, content, aside='') { return `<section class="panel"><header class="panel-head"><div class="head-title">${icon(iconName)}<div><h2>${title}</h2>${sub?`<p>${sub}</p>`:''}</div></div>${aside}</header><div class="panel-body">${content}</div></section>`; }
function table(headers, rows) { return `<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`; }

const taskRows = tasks.map(t=>`<tr><td><strong>${t[0]}</strong></td><td>${t[1]}</td><td class="mono">${t[2]}</td><td>${t[3]}</td><td class="mono">${t[4]}</td><td>${badge(t[5], t[5]==='已完成'?'success':t[5]==='分析中'?'primary':'muted')}</td><td>${badge(t[6], t[6]==='已确认'?'success':t[6]==='部分确认'?'warning':'muted')}</td><td><button class="link">查看详情</button><button class="link">导出</button></td></tr>`).join('');

const employeeRows = employees.map(e=>`<tr><td class="mono">${e.rank}</td><td><button class="name-link" data-page="detail">${e.name}</button></td><td>${e.dept}</td><td>${e.role}</td><td>${e.level}</td><td class="mono">${e.years}</td><td><strong class="mono score">${e.score}</strong></td><td>${badge(e.grade, e.grade==='高匹配'?'success':e.grade==='中匹配'?'warning':'danger')}</td><td>${e.adv}</td><td>${e.gap}</td><td>${badge(e.risk, e.risk==='低风险'?'success':e.risk==='中风险'?'warning':'danger')}</td><td>${badge(e.confirm, e.confirm==='已确认'?'primary':e.confirm==='已调整'?'warning':'muted')}</td><td><button class="link">确认</button><button class="link">备注</button></td></tr>`).join('');

const pages = {
  list: () => `
    <div class="toolbar"><div><h1>岗位匹配任务列表</h1><p>管理岗位匹配任务、分析状态与历史报告。</p></div><button class="primary" data-page="create">${icon('plus')}新建匹配任务</button></div>
    <div class="filter-bar"><label>目标岗位<select><option>全部岗位</option><option>生产运行岗</option></select></label><label>创建人<select><option>全部人员</option></select></label><label>任务状态<select><option>全部状态</option><option>待确认</option></select></label><label>创建时间<input type="date" value="2026-06-08"></label><label class="search">任务搜索<input placeholder="搜索任务名称"></label></div>
    ${section('任务列表','共 4 条记录','grid', table(['任务名称','目标岗位','匹配人数','创建人','创建时间','任务状态','确认状态','操作'], taskRows))}`,
  create: () => `
    <div class="toolbar"><div><h1>新建岗位匹配任务</h1><p>分步骤配置岗位说明书、匹配范围与员工能力材料。</p></div><button class="ghost" data-page="list">返回列表</button></div>
    <div class="steps"><span class="active">1 填写任务信息</span><span class="active">2 上传岗位说明书</span><span>3 设置匹配范围</span><span>4 上传员工数据</span></div>
    ${section('任务信息','任务名称和目标岗位为必填项','file', `<div class="form-grid"><label>任务名称<input value="生产运行岗后备人才匹配分析"></label><label>目标岗位<input value="生产运行岗"></label><label>所属部门<select><option>生产运行部</option></select></label><label>任务说明<textarea>用于识别目标岗位后备人才，辅助转岗评估和培养计划制定。</textarea></label></div>`)}
    ${section('岗位说明书与匹配范围','一期通过文件导入，不实时对接 HR 系统','upload', `<div class="upload-grid"><div class="drop">${icon('upload')}<strong>岗位说明书.docx</strong><p>支持 Word、PDF、Excel；已解析 86%</p></div><div class="drop">${icon('users')}<strong>员工基础信息表.xlsx</strong><p>必填字段校验通过，导入 128 人</p></div><div class="drop muted-drop">${icon('file')}<strong>员工能力材料.xlsx</strong><p>简历、绩效、培训、证书建议上传</p></div></div><div class="switches"><label><input type="radio" checked> 指定部门</label><label><input type="checkbox" checked> 包含当前岗位员工</label><label><input type="checkbox" checked> 包含跨部门员工</label></div>`)}
    <div class="action-row"><button class="ghost">保存草稿</button><button class="ghost">上一步</button><button class="primary" data-page="profile">开始分析</button></div>`,
  profile: () => `
    <div class="toolbar"><div><h1>岗位画像解析</h1><p>AI 自动解析岗位职责、任职资格、能力要求和关键技能标签，HR 可人工调整。</p></div><button class="primary" data-page="results">确认岗位画像</button></div>
    <div class="two-col">
      ${section('岗位基础信息','来源：生产运行岗岗位说明书.docx','shield', `<dl class="kv"><dt>岗位名称</dt><dd>生产运行岗</dd><dt>所属部门</dt><dd>生产运行部</dd><dt>岗位类别</dt><dd>生产类</dd><dt>岗位层级</dt><dd>班组骨干 / 主值</dd></dl><div class="chips"><span>设备运行</span><span>安全生产</span><span>异常处理</span><span>班组协同</span></div>`)}
      ${section('AI 智能解析','权重合计 100%，修改后需重新计算匹配结果','spark', `<h3>岗位职责解析</h3>${table(['序号','岗位职责','重要程度'], ['<tr><td>1</td><td>负责设备运行监控和异常处理</td><td>高</td></tr>','<tr><td>2</td><td>组织班组完成日常检修任务</td><td>高</td></tr>','<tr><td>3</td><td>编制设备运行记录和分析报告</td><td>中</td></tr>'])}<h3>能力要求解析</h3>${table(['能力类别','能力项','权重','要求等级'], ['<tr><td>专业能力</td><td>设备运行分析能力</td><td class="mono">30%</td><td>高</td></tr>','<tr><td>专业能力</td><td>故障判断与处理能力</td><td class="mono">25%</td><td>高</td></tr>','<tr><td>管理能力</td><td>班组组织协调能力</td><td class="mono">20%</td><td>中</td></tr>','<tr><td>通用能力</td><td>安全意识</td><td class="mono">15%</td><td>高</td></tr>','<tr><td>通用能力</td><td>沟通表达能力</td><td class="mono">10%</td><td>中</td></tr>'])}<button class="ghost">重新解析</button>`)}
    </div>`,
  results: () => `
    <div class="toolbar"><div><h1>员工匹配结果</h1><p>生产运行岗后备人才匹配分析 · 生成时间 2026-06-08 14:36</p></div><button class="primary" data-page="export">导出当前结果</button></div>
    <div class="metrics">${card('参与匹配人数','128','覆盖 5 个部门','users')}${card('高匹配人数','18','匹配分 ≥ 85','check')}${card('中匹配人数','73','匹配分 70-84','chart')}${card('平均匹配分','76.4','待确认 94 人','brain')}</div>
    <div class="filter-bar"><label>部门<select><option>全部部门</option></select></label><label>当前岗位<select><option>全部岗位</option></select></label><label>匹配等级<select><option>全部等级</option></select></label><label>风险等级<select><option>全部风险</option></select></label><label class="search">关键词<input placeholder="姓名 / 工号"></label></div>
    ${section('员工匹配排名','系统按综合匹配分从高到低排序，AI 结果需 HR 确认后使用','users', table(['排名','员工姓名','部门','当前岗位','职级','年限','匹配分','匹配等级','主要优势','主要短板','风险','确认状态','操作'], [employeeRows]))}`,
  detail: () => `
    <div class="toolbar"><div><h1>员工匹配详情</h1><p>周启明与生产运行岗的逐项匹配分析。</p></div><button class="ghost" data-page="results">返回列表</button></div>
    <div class="metrics">${card('综合匹配分','91','高匹配','check')}${card('推荐结论','推荐','可作为重点候选人','shield')}${card('风险提示','低风险','证书齐全，绩效稳定','brain')}${card('确认状态','已确认','确认人：王梅','file')}</div>
    ${section('员工画像与匹配结论','基础信息、优势短板和风险提示汇总','users', `<div class="detail-grid"><dl class="kv"><dt>姓名</dt><dd>周启明</dd><dt>工号</dt><dd>EMP-0231</dd><dt>部门</dt><dd>生产运行部</dd><dt>当前岗位</dt><dd>主值班员</dd><dt>职级</dt><dd>P6</dd><dt>工作年限</dt><dd>8 年</dd><dt>学历 / 专业</dt><dd>本科 / 自动化</dd><dt>证书</dt><dd>岗位操作证、安全资格证</dd></dl><div class="analysis"><h3>${icon('spark')}AI 分析摘要</h3><p>该员工具备目标岗位所需的设备运行监控、异常处理和安全生产培训记录，近两年绩效稳定。主要短板为班组管理跨度和跨部门协作案例仍需补充。</p><div class="chips"><span>设备运行经验</span><span>绩效稳定</span><span>证书齐全</span></div></div></div>`)}
    ${section('分项匹配与培养建议','短板项与培养措施关联展示','chart', table(['维度','岗位要求','员工具备情况','匹配结果','说明'], ['<tr><td>专业能力</td><td>设备运行分析能力</td><td>有相关项目经验</td><td>匹配</td><td>具备岗位核心能力</td></tr>','<tr><td>管理能力</td><td>班组协调能力</td><td>参与代理班组管理</td><td>部分匹配</td><td>建议扩大管理跨度</td></tr>','<tr><td>证书资质</td><td>岗位操作证</td><td>已取得</td><td>匹配</td><td>满足资质要求</td></tr>']) + table(['短板','建议措施','建议周期'], ['<tr><td>管理经验不足</td><td>安排参与班组管理辅助工作</td><td>1-3 个月</td></tr>','<tr><td>应急处理复盘不足</td><td>参加故障处置专项培训</td><td>1 个月</td></tr>']))}
    ${section('人工确认区','AI 结果不得直接替代 HR 决策','check', `<div class="form-grid"><label>人工确认结果<select><option>认可 AI 结果</option><option>调整后认可</option><option>不认可</option></select></label><label>人工匹配等级<select><option>高匹配</option><option>中匹配</option></select></label><label>推荐结论<select><option>推荐</option><option>储备培养</option><option>暂不推荐</option></select></label><label>备注说明<textarea>建议纳入生产运行岗后备人才池，并安排 1-3 个月班组协同管理实践。</textarea></label></div><div class="action-row"><button class="ghost">保存备注</button><button class="primary">确认结果</button><button class="ghost">导出个人报告</button></div>`)}`,
  export: () => `
    <div class="toolbar"><div><h1>匹配报告导出</h1><p>生成岗位匹配汇总、员工明细或单个员工匹配分析报告。</p></div><button class="primary">${icon('export')}生成报告</button></div>
    ${section('报告配置','默认包含岗位画像、员工明细、培养建议与人工确认结果','file', `<div class="form-grid"><label>报告名称<input value="生产运行岗后备人才匹配分析报告"></label><label>报告类型<select><option>岗位匹配汇总报告</option><option>员工匹配明细报告</option><option>单个员工匹配报告</option></select></label><label>报告范围<select><option>全部员工</option><option>当前筛选结果</option><option>指定员工</option></select></label><label>报告格式<select><option>Word</option><option>Excel</option></select></label></div><div class="switches"><label><input type="checkbox" checked> 包含岗位画像</label><label><input type="checkbox" checked> 包含员工明细</label><label><input type="checkbox" checked> 包含培养建议</label><label><input type="checkbox" checked> 包含人工确认结果</label></div>`)}
    <div class="three-col">${section('Word 报告结构','','file','<ol><li>报告封面</li><li>分析任务说明</li><li>目标岗位画像</li><li>整体匹配情况</li><li>高匹配候选人名单</li><li>共性短板分析</li><li>培养建议</li><li>人工确认结果</li></ol>')}${section('Excel 明细字段','','grid','<p>员工姓名、部门、当前岗位、职级、匹配分、匹配等级、推荐结论、主要优势、主要短板、培养建议、人工确认结果、备注。</p>')}${section('AI 报告提示','','spark','<p>报告仅用于辅助汇报、人才盘点和培养计划制定，正式人事决策需 HR 或部门负责人确认。</p>')}</div>`
};

const nav = [
  ['list','任务列表','创建、查看与导出任务','grid'],
  ['create','新建任务','分步骤上传与配置','plus'],
  ['profile','岗位画像','AI 解析与人工确认','brain'],
  ['results','匹配结果','排名、筛选与批量确认','chart'],
  ['detail','员工详情','逐项匹配与培养建议','users'],
  ['export','报告导出','Word / Excel 报告','export']
];

function render(page='list') {
  document.querySelector('#app').innerHTML = `
    <aside class="sidebar"><div class="brand"><div>${icons.brain}</div><strong>岗位匹配智能体</strong><span>JOB MATCH AGENT</span></div><p class="nav-label">功能模块</p><nav>${nav.map(n=>`<button class="nav-item ${n[0]===page?'active':''}" data-page="${n[0]}">${icon(n[3])}<span><strong>${n[1]}</strong><small>${n[2]}</small></span></button>`).join('')}</nav><div class="footer-mini">HR 智能分析部 <span>v1.0</span></div></aside>
    <main><div class="crumb">岗位匹配智能体 / <strong>${nav.find(n=>n[0]===page)?.[1] || '任务列表'}</strong><button class="primary small">${icon('spark')}AI 已就绪</button></div><div class="content">${pages[page]()}</div></main>`;
  document.querySelectorAll('[data-page]').forEach(el => el.addEventListener('click', () => render(el.dataset.page)));
}

render();
