(() => {
  const DATA = {
    hungry: {
      publisher: 'HungryStudio',
      product: 'Block Blast!',
      upi: '67f43cbca12e6eabea635546',
      uai: '622390aa2e0fa027dbdc26b8',
      snapshot: { downloads: '23.3M', dau: '43.9M' },
      retention: {
        d7: 29.1,
        d30: 18.0,
        monthly: {
          d7: [34.294, 33.0781, 33.8769, 32.3657, 32.1609, 31.1306, 29.7669, 29.6428, 29.4075, 29.1953, 29.1159],
          d30: [22.3906, 21.412, 21.4555, 20.3901, 20.0738, 19.2129, 18.2778, 18.129, 17.9828, 17.8302, 18.0171]
        }
      },
      dates: ['2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'],
      series: {
        downloads: [39481414, 33038529, 32070654, 35930813, 30626997, 24795709, 19278555, 19029100, 20798992, 23075645, 22688558],
        dau: [55733959, 52851119, 54442943, 56255110, 57336685, 55409876, 49954704, 48095587, 46433960, 46484375, 46149597]
      }
    },
    ivy: {
      publisher: 'Ivy Mobile',
      product: 'Color Block: Combo Blast',
      upi: '5bc0f7179a22547cba413c2e',
      uai: '650c1c82b5746273f2aff851',
      snapshot: { downloads: '31.3M', dau: '16.2M' },
      retention: {
        d7: 6.7,
        d30: 3.0,
        monthly: {
          d7: [11.8813, 10.5645, 9.9003, 12.517, 9.374, 9.4383, 8.6051, 8.0552, 7.5305, 7.2936, 6.6707],
          d30: [4.4026, 3.8349, 3.6316, 5.5141, 3.2839, 3.5854, 3.1538, 3.0708, 3.1557, 3.2485, 3.0419]
        }
      },
      dates: ['2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'],
      series: {
        downloads: [4323566, 9282999, 5370486, 7441225, 6833378, 7260384, 7954503, 7669753, 9535264, 13295349, 11169102],
        dau: [1146928, 1676088, 1548943, 1864254, 1935156, 1993292, 2241591, 2349402, 2873188, 4003218, 5876864]
      }
    },
    boltray: {
      publisher: 'Leiting Games',
      product: 'Sword x Staff',
      upi: '5717753002ac646085000065',
      uai: '690166950fd1f55c72d8b80a',
      snapshot: { downloads: '1.28M', revenue: '$15.3M', dau: '378K' },
      retention: {
        d7: 19.1,
        d30: 8.1,
        monthly: {
          d7: [21.7654, 19.916, 20.8515, 20.3929, 21.0148, 16.9954, 17.549, 17.0824, 17.97, 17.9891, 19.1335],
          d30: [8.8973, 9.3995, 8.4682, 8.2715, 8.5895, 7.3397, 6.8128, 6.9071, 7.2166, 7.4494, 8.0533]
        }
      },
      dates: ['2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'],
      series: {
        downloads: [163289, 177753, 161723, 158288, 90710, 1649329, 937262, 787096, 539418, 360175, 355308],
        revenue: [5595097, 5138431, 4571950, 5189688, 3729901, 7111345, 14377643, 13948186, 13355364, 11452113, 10697219],
        dau: [73512, 62097, 66196, 66324, 65775, 175392, 290384, 257375, 227358, 175513, 141768]
      }
    },
    aviagames: {
      publisher: 'Aviagames',
      product: 'Mahjong Rumble: Win Real Cash',
      upi: '5ebcbfce71d7541628127751',
      uai: '69df23496c2f7c4dd57adc4d',
      snapshot: { downloads: '1.34M', dau: '808K' },
      retention: {
        d7: 21.5,
        d30: 10.8,
        monthly: {
          d7: [11.5, 11.5, 11.5, 11.5, 11.5, 21.71, 21.51],
          d30: [3.48, 3.48, 3.48, 3.48, 3.48, 10.5, 10.75]
        }
      },
      dates: ['2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'],
      series: {
        downloads: [2665, 20993, 90240, 253486, 354737, 346991, 385744],
        dau: [117, 2120, 10877, 31522, 55799, 68557, 81045]
      }
    },
    im30: {
      publisher: 'Long Tech Network',
      product: 'Rise of Castles: Ice and Fire',
      upi: '562947693f07e236f9002bd3',
      uai: '5b5a6814befb8213d010b9d5',
      snapshot: { downloads: '99K', revenue: '$4.48M', dau: '89.6K' },
      retention: {
        d7: 8.9,
        d30: 3.4,
        monthly: {
          d7: [8.6196, 8.6697, 8.7248, 8.5959, 8.6869, 8.635, 8.5515, 8.6605, 8.7967, 8.7756, 8.8738],
          d30: [3.3356, 3.3355, 3.4098, 3.279, 3.3197, 3.2429, 3.1202, 3.1777, 3.3216, 3.3254, 3.3634]
        }
      },
      dates: ['2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'],
      series: {
        downloads: [138234, 122875, 57362, 160215, 63545, 72924, 85922, 57759, 56690, 44139, 43575],
        revenue: [3559150, 3067844, 2468346, 2622157, 2441284, 2181420, 2177950, 2088711, 2404749, 2071825, 1883989],
        dau: [45344, 35198, 33026, 34135, 24635, 25622, 21759, 20163, 25015, 26845, 28382]
      }
    },
    dnonline: {
      publisher: 'Kinetic Energy Game',
      product: 'Fallen Beauty: Merge & Story',
      upi: '692685a9e4f57e7f9383f51a',
      uai: '68a942ef3e1f11ed7902bab2',
      snapshot: { downloads: '548K', revenue: '$1.52M', dau: '113K' },
      retention: {
        d7: 14.6,
        d30: 5.9,
        monthly: {
          d7: [14.775, 15.7893, 15.6404, 14.0967, 15.8933, 19.5696, 12.0674, 16.8979, 12.6091, 14.9026, 14.5928],
          d30: [5.5134, 5.9961, 6.0651, 2.8657, 7.3138, 11.4465, 11.0402, 6.8559, 5.8281, 5.4857, 5.9322]
        }
      },
      dates: ['2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10'],
      series: {
        downloads: [1122, 743, 6337, 67948, 148123, 130236, 138721, 921596, 804550, 532322, 603521],
        revenue: [12545, 21791, 38311, 85345, 176950, 445072, 695791, 1078586, 1338014, 1421627, 1679234],
        dau: [544, 308, 680, 5036, 16635, 19745, 22018, 87209, 113573, 103263, 113930]
      }
    }
  };

  const META = {
    downloads: { label: '月度下载', short: '下载', currency: false },
    revenue: { label: '月度估算收入', short: '收入', currency: true },
    dau: { label: '月均 DAU', short: 'DAU', currency: false }
  };

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  const compact = (number, currency = false) => {
    const absolute = Math.abs(number);
    let value = absolute >= 1e6
      ? `${(number / 1e6).toFixed(absolute >= 1e7 ? 1 : 2)}M`
      : absolute >= 1e3
        ? `${(number / 1e3).toFixed(absolute >= 1e5 ? 0 : 1)}K`
        : String(Math.round(number));
    value = value.replace(/\.0(?=[KM]$)/, '');
    return currency ? `$${value}` : value;
  };

  const formatNumber = (value, currency = false) => {
    if (value == null || Number.isNaN(value)) return '—';
    return `${currency ? '$' : ''}${value.toLocaleString('en-US')}`;
  };

  const formatRetention = (value) => value == null ? '—' : `${value.toFixed(1)}%`;

  function chart(values, dates, label, currency) {
    const width = 500;
    const height = 175;
    const left = 38;
    const right = 12;
    const top = 14;
    const bottom = 25;
    const max = Math.max(...values, 1);
    const min = Math.min(...values, 0);
    const range = max - min || 1;
    const x = (index) => left + (width - left - right) * (values.length === 1 ? 0 : index / (values.length - 1));
    const y = (value) => top + (height - top - bottom) * (1 - (value - min) / range);
    const path = values.map((value, index) => `${index ? 'L' : 'M'}${x(index).toFixed(1)},${y(value).toFixed(1)}`).join(' ');
    const area = `${path} L${x(values.length - 1)},${height - bottom} L${x(0)},${height - bottom} Z`;
    const middle = Math.floor((dates.length - 1) / 2);
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(label)}趋势"><defs><linearGradient id="publisherArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#64a6a8"/><stop offset="1" stop-color="#eaf3f4"/></linearGradient></defs><line class="chart-grid" x1="${left}" y1="${top}" x2="${left}" y2="${height - bottom}"/><line class="chart-grid" x1="${left}" y1="${height - bottom}" x2="${width - right}" y2="${height - bottom}"/><path class="chart-area" d="${area}"/><path class="chart-line" d="${path}"/>${values.map((value, index) => `<circle class="chart-dot" cx="${x(index)}" cy="${y(value)}" r="3"><title>${dates[index]}：${currency ? '$' : ''}${value.toLocaleString('en-US')}</title></circle>`).join('')}<text class="chart-label" x="${left}" y="${height - 5}">${dates[0]}</text><text class="chart-label" x="${x(middle)}" y="${height - 5}" text-anchor="middle">${dates[middle]}</text><text class="chart-label" x="${width - right}" y="${height - 5}" text-anchor="end">${dates.at(-1)}</text><text class="chart-label" x="${left - 5}" y="${top + 4}" text-anchor="end">${compact(max, currency)}</text></svg>`;
  }

  function render(root, data) {
    const metrics = Object.keys(data.series);
    const productUrl = `https://app.sensortower.com/overview/${data.uai}`;
    const publisherUrl = `https://app.sensortower.com/publisher/unified/${data.upi}/?page=1`;
    const kpis = [
      { label: '最近30天下载', value: data.snapshot.downloads, scope: '发行商总体 · 截至 2026-11-16' },
      ...(data.snapshot.revenue ? [{ label: '最近30天收入', value: data.snapshot.revenue, scope: '发行商总体 · 截至 2026-11-16' }] : []),
      { label: '最近30天平均 DAU', value: data.snapshot.dau, scope: '发行商总体 · 截至 2026-11-16' },
      { label: 'D7 留存', value: `${data.retention.d7.toFixed(1)}%`, scope: '主力产品 · 2026 年 10 月' },
      { label: 'D30 留存', value: `${data.retention.d30.toFixed(1)}%`, scope: '主力产品 · 2026 年 10 月' }
    ];

    root.innerHTML = `<div class="publisher-panel">
      <div class="publisher-identity">
        <div><small>代表发行商</small><strong><a href="${publisherUrl}" target="_blank" rel="noopener noreferrer">${esc(data.publisher)} ↗</a></strong></div>
        <div class="publisher-product"><small>主力产品</small><strong><a href="${productUrl}" target="_blank" rel="noopener noreferrer">${esc(data.product)} ↗</a></strong><div class="publisher-scope">双平台聚合 · 全球</div></div>
      </div>
      <div class="publisher-kpis ${kpis.length === 4 ? 'four' : ''}">${kpis.map((item) => `<div class="publisher-kpi"><span>${item.label}</span><b>${item.value}</b><em>${item.scope}</em></div>`).join('')}</div>
      <div class="trend-wrap">
        <div class="trend-titlebar"><h3>主力产品月度趋势</h3><p>${data.dates[0]}—${data.dates.at(-1)} · 全球 · Sensor Tower</p></div>
        <div class="trend-grid ${metrics.length === 2 ? 'two' : ''}">${metrics.map((key) => {
          const meta = META[key];
          const values = data.series[key];
          return `<article class="trend-card"><div class="trend-card-head"><h4>${meta.label}</h4><span class="latest">${compact(values.at(-1), meta.currency)}</span></div>${chart(values, data.dates, meta.label, meta.currency)}</article>`;
        }).join('')}</div>
      </div>
      <div class="retention-block">
        <div class="retention-copy"><h3>主力产品留存表现</h3><p>2026 年 10 月 · 全球</p></div>
        <div class="retention-bars">${[['D7', data.retention.d7], ['D30', data.retention.d30]].map(([label, value]) => `<div class="retention-row"><span>${label}</span><div class="retention-track"><div class="retention-fill" style="width:${Math.min(value * 2, 100)}%"></div></div><b>${value.toFixed(1)}%</b></div>`).join('')}</div>
      </div>
      <details class="publisher-details">
        <summary>查看主力产品月度数据明细（含 D7 / D30 留存）</summary>
        <div class="publisher-tablebox"><table class="publisher-table">
          <thead><tr><th>月份</th>${metrics.map((key) => `<th>${META[key].short}</th>`).join('')}<th>D7 留存</th><th>D30 留存</th></tr></thead>
          <tbody>${data.dates.map((date, index) => `<tr><td>${date}</td>${metrics.map((key) => `<td>${formatNumber(data.series[key][index], META[key].currency)}</td>`).join('')}<td>${formatRetention(data.retention.monthly.d7[index])}</td><td>${formatRetention(data.retention.monthly.d30[index])}</td></tr>`).join('')}</tbody>
        </table></div>
      </details>
    </div>`;
  }

  document.querySelectorAll('[data-publisher-dashboard]').forEach((root) => {
    const data = DATA[root.dataset.publisherDashboard];
    if (data) render(root, data);
  });
})();
