# Redis入门

## 一. 基础

Redis是一个开源的高性能键值对数据库

作为缓存系统，Redis还可以限定数据占用的最大内存空间，在数据达到空间限制后可以按照一定的规则自动淘汰不需要的键

redis-cli是Redis自带的命令行客户端

```
keys pattern
查找符合给定的模式（pattern，非正则）的key，如：keys * 显示所有key,key ? 显示任意一个字符的key

exists key [key…]
key是否存在，返回integer，即返回存在的数量

del key [key…]
删除key，返回integer，即返回删除成功的数量

dump key
key进行序列化，返回序列化后的值

type key
返回key所存储值的类型
```

## 二. string类型

```
set key value
key赋值为value，key不存在则生成，存在则覆盖（相当于更新）

get key
返回key值

strlen key
key的value长度，从1开始
```

## 三. hash类型

```
hset key field value
将key的hash表中的字段field设值为
value（由field和关联的value组成的map），字段不存在则生成，存在则覆盖（相当于更新）

hgetall key
获取key中所有的字段和值

hget key field
获取key中指定字段的值

hlen key
key的字段数量,返回integer

hdel key field1 [field2]
删除一个或多个hash字段
```

## 四. list列表

```
lpush key value1 [value2]
将一个或多个值插入到列表头部，返回插入数量，从1开始

llen key
获取列表长度

lrange key start stop
获取列表指定范围内的元素，start、stop超出范围，只返回范围内存在的元素

blpop key1 [key2 ] timeout
移出并获取列表的第一个元素，如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。

brpop key1 [key2 ] timeout
移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。

lrem key count value
移除列表中count个value元素，返回移除成功的数量

rpop key
移除并获取列表最后一个元素
```

## 五. set集合

```
sadd key member1 [member2…]
向集合添加一个或多个元素，返回成功添加个数

scard key
获取集合的元素个数

smembers key
返回集合所有元素

srem key member1 [member2…]
移除集合中一个或多个元素，返回移除成功个数
```

## 六. zset有序集合

```
zadd key score1 member1 [score2 member2…]
添加一个或多个元素，并给每个元素设置分数,返回成功插入个数

zcard key
获取集合元素个数

zcount key min max
统计score在[min,max]区间的元素数量

zrem key member[member…]
移除有序集合中的一个或多个元素
```

参考：
https://blog.csdn.net/IT_faquir/article/details/79774821