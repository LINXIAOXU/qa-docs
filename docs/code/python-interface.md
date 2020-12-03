# python 接口测试

## 自动化的检查登记

* HTTP Code 检查：判断HTTP请求的结果，如果返回的是200则表示正常
* Interface ReturnCode 检查：接口返回包的关键参数，是接口正确性的第一要素
* Interface 结构完整性检查：返回包层级正确性，保证返回数据结构性正确
* Interface 参数完整性检查：返回包所包含的参数集合，在结构完整性正确后检查，可保证必要参数的存在及其正确性
* Interface 特殊参数值检查：特殊参数值检查，不宜过多，有别于ReturnCode检查，偏向于包数据

## 接口测试用例设计——总纲

1. 第一个维度——参数校验。从参数组合的角度，应尽可能多地覆盖参数组合场景。
2. 第二个维度——逻辑校验。应结合“该接口处理的业务逻辑与底层数据存储”来设计对应的场景。这其实也是参数的组合，只不过，这种参数组合是为了校验逻辑而有针对性地设计的

## 连接数据库——pymysql

```python
# 文件位置
common
|- __init__.py
|- config.py
|- db.py
|- redis.py
data
|- topics.json
config.yaml
fetch_topics_to_json_file.py
create_topic_novel_relation.py

# config.yaml
redis:
  main:
    host: '127.0.0.1'
    port: 6379
    password: ''

db:
  log_mode: true
  main:
    host: '127.0.0.1'
    port: 3306
    user: 'novel_test'
    password: ''
    database: 'test_novel'
  management:
    host: '127.0.0.1'
    port: 3306
    user: 'novel_test'
    password: ''
    database: 'test_management'
  report:
    host: '127.0.0.1'
    port: 3306
    user: 'novel_test'
    password: ''
    database: 'test_novel_report'
  pasta:
    host: '127.0.0.1'
    port: 3306
    user: 'novel_test'
    password: ''
    database: 'test_pasta'
  stats:
    host: '127.0.0.1'
    port: 3306
    user: 'novel_test'
    password: ''
    database: 'test_novel_stat'
  financial:
    host: '127.0.0.1'
    port: 3306
    user: 'novel_test'
    password: ''
    database: 'test_financial'

db_sharding:
  readlog:
    instances:
      -
        host: '127.0.0.1'
        port: 3306
        user: 'novel_test'
        password: ''
    db_count: 2
    db_name: 'test_read_log'
    db_per_instance: 2
    table_name_prefix: 'tbl_read_log_'
    table_count: 8

  consume:
    instances:
      -
        host: '127.0.0.1'
        port: 3306
        user: 'novel_test'
        password: ''
    db_count: 2
    db_name: 'test_consume'
    db_per_instance: 2
    table_name_prefix: 'tbl_consume_'
    table_count: 8

  welth_coupon:
    instances:
      -
        host: '127.0.0.1'
        port: 3306
        user: 'novel_test'
        password: ''
    db_count: 2
    db_name: 'test_welth_coupon'
    db_per_instance: 2
    table_name_prefix: 'tbl_welth_coupon_'
    table_count: 8

  welth_log:
    instances:
      -
        host: '127.0.0.1'
        port: 3306
        user: 'novel_test'
        password: ''
    db_count: 2
    db_name: 'test_welth_log'
    db_per_instance: 2
    table_name_prefix: 'tbl_welth_log_'
    table_count: 8

# config.py
import yaml

def get_config():
    stream = open('config.yaml', 'r')
    return yaml.load(stream, Loader=yaml.FullLoader)

# db.py
import pymysql
from common import config

def get_connection(name):
    c = config.get_config()
    db_config = c['db'][name]
    return pymysql.connect(host=db_config['host'],
                             user=db_config['user'],
                             password=db_config['password'],
                             db=db_config['database'],
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

def insert(cursor, table, data):
    placeholders = ', '.join(['%s'] * len(data))
    columns = ', '.join(map(lambda x: f'`{x}`', data.keys()))

    values = []
    for value in data.values():
        values.append(value)

    cursor.execute(f"INSERT INTO {table} ({columns}) VALUES ({placeholders})", values)

def find_all(cursor, sql):
    cursor.execute(sql)
    return cursor.fetchall()

def find_one(cursor, sql):
    cursor.execute(sql)
    return cursor.fetchone()

# redis.py
from common import config
import redis

def get_client():
    c = config.get_config()
    redis_config = c['redis']['main']
    return redis.Redis(host=redis_config['host'], port=redis_config['port'], db=0, password=redis_config['password'])

# fetch_topics_to_json_file.py
from common import utils, db

"""
导出所有专题数据到json文件
"""

if __name__ == '__main__':
    connection = db.get_connection('main')
    try:
        with connection.cursor() as cursor:
            result = db.find_all(cursor, "SELECT * FROM tbl_topic")
            for item in result:
                del item['id']
                del item['created_at']
                del item['updated_at']
                del item['effected_at']
                del item['expired_at']
                del item['location_id']
                del item['page_ids']

            utils.write_json_to_file('data/topics.json', result)

    finally:
        connection.close()

# create_topic_novel_relation.py
import json
import random
from common import utils, db

"""
创建专题和小说的关联数据
"""

if __name__ == '__main__':
    connection = db.get_connection('main')
    try:
        with connection.cursor() as cursor:
            cursor.execute("TRUNCATE tbl_topic_novel_relation")

            cursor.execute("SELECT id, title FROM tbl_novels")
            db_novels = cursor.fetchall()
            cursor.execute("SELECT id, title FROM tbl_topic")
            db_topics = cursor.fetchall()

            for topic in db_topics:
                novels = random.sample(db_novels, random.randint(20, 50))
                print(f"开始给专题{topic['title']}添加小说")

                index = 1
                for novel in novels:
                    db.insert(cursor, 'tbl_topic_novel_relation', dict(topic_id=topic['id'], novel_id=novel['id'], sort_order=index))
                    index = index + 1

            connection.commit()
                
    finally:
        connection.close()
```